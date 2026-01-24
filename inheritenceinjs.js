                // Inheritance in JavaScript
// Example of class-based inheritance
class parent {
    constructor() {
        this.fatherName = "John";
    }
}

class child extends parent {
    constructor() {
        super();
        this.childName = "Jane";
    }
}
let child1 = new child();
console.log("Father's Name: " + child1.fatherName);
console.log("Child's Name: " + child1.childName);


// Example of prototypal  inheritance
function Parent() {
    this.fatherName = "John";
}  
function Child() {
    this.childName = "Jane";
}
Child.prototype = new Parent();
let childs = new Child();
console.log("Father's Name: " + childs.fatherName);
console.log("Child's Name: " + childs.childName);


// multiple inheritance

class Animal {
    eat() {
        console.log("Animal is Eating");
    }
}
class Dog {
    bark() {
        console.log("Dog is Barking");
    }
}
class Puppy extends Dog {
    play() {
        console.log("Puppy is Playing");
    }
}

let puppy1 = new Puppy();
puppy1.bark();  // Output: Dog is Barking
puppy1.play();  // Output: Puppy is Playing


// method overriding
class Person {
    speak() {
        console.log("Person is Speaking");
    }
}
class Student extends Person {
    speak() {
        console.log("Student is Speaking");
    }
}

let student1 = new Student();
student1.speak(); // Output: Student is Speaking


// one more example of inheritance
class Parents {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, " + this.name);
    }   
}
class Child1 extends Parents {
    constructor(name, age){
        super(name);    // parent class constructor call
        this.age = age;
    }
}


let childobj = new Child1("Jack", 10);
childobj.greet();                 // Output: Hello, Jack
console.log("Age: " + childobj.age); // Output: Age: 10


/// Error handling
try {
    let x = y + 5; // y is not defined
} catch (error) {
    console.log("Error: " + error.message);
}


try {
    let a = 20/3;
    console.log(a);
} catch (error) {
    console.log("Error: " + error.message);
}finally {
    console.log("Execution completed.");
}



// Custom Error Handling
let age = -5;

try {
    if (age < 0) {
        throw "Age cannot be negative";
    }
} catch (error) {
    console.log("Error: " + error);
}




