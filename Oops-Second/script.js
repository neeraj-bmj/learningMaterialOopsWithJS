// jab bhi constructor banaoge aur kuch aisa mil gaya jo ki sabme same hai to usse kabhi bhi direct constructor mein banana galat tarika hota hai per sahi tarika hai prototype ka use karna kyuki prototype mein me save karne per jitne bhi new ke saath instance banaoge wo saare instance by default tumhari prototype ki value ko hold karegi 

//1)
function Product( name, price){
    this.name = name;
    this.price = price;
}
let t1 = new Product("Chocolate", 20);
let t2 = new Product("Mango", 2);

//2)

function Product( name){
    this.name = name;
    this.price = 10;
}
let p1 = new Product("apple");
let p2 = new Product("banana");


//3)
function Goods( name){
    this.name = name;
}
Goods.prototype.price =10;
let g1 = new Goods("pencil");
let g2 = new Goods("book");

//4)
function Users(name, age, email, salary){
    this.name = name;
    this.age = age;
    this.email = email;
    this.salary = salary;
}
Users.prototype.userInfo = function(){
    console.log(`Name : ${this.name}, Age: ${this.age}, Email: ${this.email},
        Salary: ${this.salary}`);
}
let user1 = new Users("Neeraj Gupta", 18, "neerajguptaica@gmail.com", 1000000);

//call
// console.log(user1);
// console.log(user1.userInfo());

//5)
// Note: sabse pahle property ko aapke object me dhudenge agar nahi mila to uske prototype me dhudenge agar nahi mila to uske prototype ke prototype me dhudenge jab tak ki aapko mil nahi jata ya phir null nahi ho jata

function Mobile(name, price, color){
    this.name ="#)" + name;
    this.price = price;
    this.color = color;
    this.printName = function(){
        console.log(this.name)
    }
}
Mobile.prototype.price = 10000;
let m1 = new Mobile("Samsung", 20000, "Black");

//call
// console.log(m1);
// console.log(m1.printName());

//6) useCase of prototype
function Employee(name, age, email, ID, salary){
    this.name = name;
    this.age = age;
    this.email = email;
    this.ID = ID;
    this.salary = salary;
}
Employee.prototype.EmployeeInfo = function(){
    console.log(`${this.name} is my name, and i am ${this.age} years old, my email is ${this.email} and my id is ${this.ID} and my salary is ${this.salary}`)
}
let emp1 = new Employee("Neeraj Gupta", 18, "neerajguptaica@gamil.com", "123456", 1000000);
