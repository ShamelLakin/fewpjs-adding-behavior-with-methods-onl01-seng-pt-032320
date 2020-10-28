class Cat {
    constructor(name, sex){
        this.name = name; 
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`
    }
}




class Dog {
    constructor(name, sex){
       this.name = name;
       this.sex = sex; 
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;        
    }
    speak(){
        return `It's me! ${this.name}, the parrot!`
        
    }
}

let bird2 = new Bird();
bird2.speak();