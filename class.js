'use strict';

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    
    set age(value){
        this._age = value < 0 ? 0 : value;
    }

    speak(){
        console.log('${this.name}: hello');
    }
}

const jjong = new Person('jjong', 27) ;
console.log(jjong.name);



const user1 = new User('Steve', 'job', -1);
console.log(user1.age);