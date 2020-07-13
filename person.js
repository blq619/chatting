// const person = {
//     name: 'kn',
//     age: 27
// }
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greering(){
        console.log(`My name is ${this.name} age is ${this.age} 입니다`);
    }
    goodbye() {
        console.log(`잘가세요 ${this.name}님`);
    }
}


module.exports = Person;