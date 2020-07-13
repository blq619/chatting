const http = require('http');

const PORT = 5000;

//서버 생성
http.createServer((req, res)=>{
    
    if(req.url === '/api/users'){
        const users = [
            {name : "aaa" , age: 27},
            {name : "bbb" , age: 28},
            {name : "ccc" , age: 29},
            {name : "ddd" , age: 30},
            {name : "eee" , age: 31},
        ]
        res.write(JSON.stringify(users));
    } else if (req.url === '/api/todos') {
        
    } else {
        res.write('<h1>Node JS</h1>');
    }
    res.end();
})
.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})