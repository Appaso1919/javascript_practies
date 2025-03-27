//class 
class perents {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let perent = new perents("Appaso", 22);
perent.displayInfo(); 


//object
let obj = {
    name: "Ajay",
    age: 23,
    job: "Web Developer"
};
console.log(obj);



//inheritence
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Student extends person {
    constructor(name, age, grade) {
        super(name, age); 
        this.grade = grade;
    }
    displayStudentInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
let student1 = new Student("appaso", 22, "A+");
student1.displayStudentInfo(); 



//polymorphisum
// Parent class
class Shape {
    calculateArea() {
        console.log("Calculating area...");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        console.log(`Area of Circle: ${3.14 * this.radius * this.radius}`);
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        console.log(`Area of Rectangle: ${this.length * this.width}`);
    }
}
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

circle.calculateArea();     
rectangle.calculateArea(); 
