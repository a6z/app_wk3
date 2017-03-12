'use strict'
class Person {
    constructor (name){
        this.Name = name;
    }
    printgreet (){
        console.log(`Hi, my name is ${this.Name}!`);
    }
}

class Employee extends Person {
    constructor (name, job) {
        super(name);
        this.Job = job;
    }
    printgreet (){
        super.printgreet();
        console.log(`I'm ${this.Job}.`);
    }
}

var person1 = new Employee('A6','student');
person1.printgreet();

var person2 = new Person('Gunboy');
person2.printgreet();

Person.prototype.printgreet = function(){
    console.log(`Hi, my name is ${this.Name}, & I've been changed!`);
}
person2.printgreet();