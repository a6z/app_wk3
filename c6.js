'use strict'
class Person {
    constructor (name){
        this.Name = name;
    }
    printgreet (){
        console.log(`Hi, ${this.Name}!`);
    }
}

var person1 = new Person('A6');
person1.printgreet();

var person2 = new Person('Gunboy');
person2.printgreet();