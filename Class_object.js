             // Class & Object Practice Sheet


// Creating a object using Object Literals

const student = {
    name: "Jeetendra",
    age: 22,
    city: "Indore",
    course: "B.Tech",
    study: () => {
        console.log("Studying JavaScript");
    }
};

console.log(student.name);   // Jeetendra
student.study();           // Studying JavaScript


// Classes in JavaScript
class Student {
    constructor(name, age, city, course) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.course = course;
    }
     study() {
        console.log("Studying JavaScript");
    }
}

const student1 = new Student("Jeetendra", 22, "Indore", "B.Tech");
console.log(student1.name);   // Jeetendra
student1.study();           // Studying JavaScript


// Class with constructor method
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
car1.displayInfo();  // Brand: Toyota, Model: Camry, Year: 2020


// Make a object using Class and constructor
class Laptop {
    constructor(brand, model, price) {
        this.brand = brand;
            this.model = model;
            this.price = price;
     }
     showDetails() {
            console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}`);
     }
}
const laptop1 = new Laptop("Hp", "XPS 13", 999);
laptop1.showDetails();  // Brand: Hp, Model: XPS 13, Price: $999

// Class with method to calculate area of rectangle
class Rectangle {
    constructor(length, width) {
            this.length = length;
               this.width = width;
     }
     area() {
            return this.length * this.width;
     }  

}
const rect1 = new Rectangle(5, 3);
console.log("Area of Rectangle:", rect1.area());  // Area of Rectangle: 15


// Class with method to calculate circumference of circle
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle1 = new Circle(5);
console.log("Circumference of Circle:", circle1.circumference());  // Circumference of Circle: 31.41592653589793


// Class with method to convert temperature from Celsius to Fahrenheit
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
     }
     toFahrenheit() {
        return (this.celsius * 9/5) + 32;
     }    
}
const temp1 = new Temperature(25);
console.log("Temperature in Fahrenheit:", temp1.toFahrenheit());  // Temperature in Fahrenheit: 77


// class with method
class Bike {
     constructor(brand,model,speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
     }
     run() {
        console.log(`brand: ${this.brand}, model: ${this.model}, speed: ${this.speed}`);
     }
}
const bike1 = new Bike("Yamaha", "R15", 150);
const bike2 = new Bike("Honda", "CBR", 140);
bike1.run();  // brand: Yamaha, model: R15, speed: 150
bike2.run();  // brand: Honda, model: CBR, speed: 140