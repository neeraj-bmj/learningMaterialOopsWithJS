"use strict";
// jo code hum javascript me likhte hai wah sab code hum typescript me likh sakte hai
// typescript javascript ka papa hai isme sirf data type  batana padta hai baki sab kuch same hai
// typescript is a superset of javascript
let a = 10;
let b = 50;
// Example assign to another type of data in declared variable
// a="Rohit";
//  how to deal with number
let marks = 50;
//  how to deal with bigint
let bignumber = 2174384738473n;
//  how to deal with string
let str = "Neeraj Gupta";
//  how to deal with boolean
let isPass = true;
isPass = false;
// how to deal with null
let ball = null;
// how to deal with undefined
let bat;
let basket = undefined;
// compile time language
// Interprted language
// jit : just in time
//  any
let value;
value = 20;
value = "marks";
value = true;
// OR
let mobile;
mobile = "Nokia";
mobile = 234;
// there is no checking the type of value only and only use it
// console.log(mobile.toUppercase());
// there are the type of     :     any
// any : this is very dangerous for us because we assigned any type of value it will accpet all the value and dont throw any error
// unknown
let cover;
cover = "Samsung ultra s25";
cover = 599;
cover = true;
// here first priority chek what type of value then use it
if (typeof cover === "string")
    console.log(cover.toUpperCase());
if (typeof cover === "number")
    console.log(cover.toFixed(599));
// Non-Premitive
let arr = [2, 4, 5, 7, 3, 2, 9];
let arr1 = [54, 30, 98, 56, 34, 76, 67];
let list = ["Mohan", 599, "Suraj"];
let list1 = ["Mohan", 599, "Suraj"];
let list2 = ["Neeraj Gupta", 89, true];
// here jo bhi element ka data type define hota hai keval usi ko hi array me rakh sakte hahi agar koi aur alag type ka data push karne per ERROR throw karega.
// Example like this.
// list1.push(true);
// Tuple
let tuple = ["Neeraj", 789, 43];
// tuple me iski size fixed hoti hai hum tuple ke array me jitne bhi element banayenge utne type ke datatype declare karna padega agar hundred element hai to hundred bar datatype declare karna padega
// OBJECT
// inline or ek line me
let obj1 = {
    user: "Neeraj",
    age: 18,
    gender: "male",
    isStudent: true,
};
// alag alag line me
let obj2;
obj2 = {
    user: "Suraj",
    age: 28,
    gender: "male",
    isStudent: true,
};
let class_student = {
    name: "sohan",
    rollNumber: 45,
    isPass: true,
    id: 1020,
};
let Owner = {
    names: "Krishna",
    id: 5677,
    age: 43,
    address: "Gorakhpur",
};
//  here salary is optional chahe hum salary ko mention kare ya na kare iske object ka interface banakar type interface declare kar diya hu isme optional ko declare karne ke liye question mark (?) ka use karte hai  
let employee1 = {
    name: "Neeraj Gupta",
    age: "18",
    salary: 660000,
};
let employee2 = {
    name: "Mohan",
    age: 45,
};
let hello1 = {
    name: "Neeraj Gupta",
    salary: 66000,
};
// Pertial me sabhi data optional rahta hai jiski need ho likhe ya nhi likhe 
let hello2 = {
    name: "Mr. Sam",
    age: 34,
    salary: 55000
};
// Required me sabhi data ko likhna important hota hai agar koi data galti se chutt jata hai to error dene lagta hai
let hello3 = {
    name: "Mr . John",
    age: 34,
    salary: 23000
};
// aur readonly me hum data ko sirf read kar sakte hai koi changes nhi kar sakte hai 
// Array of objects
// Example 1
let arrayfirst = [{ name: "Aman", age: 19, }, { name: "Chaman", age: 29, }];
let employee4 = [{ name: "Umakant", id: 767 }, { name: "Shubankar ", id: 233 }];
// Functions in Typescript 
// first Example with returned value
function namePrint(name) {
    console.log(`hello, ${name}`);
    return (`welcome to ${name}`);
}
// namePrint("Krishna");
// Second Example without retuning any value
function welcome(wel) {
    console.log(` hello ${wel} how are you`);
}
let greets = [{
        name: "santosh",
        user: "santosh056",
        password: 12423,
        id: 437483,
    }];
let man = {
    name: "amit",
    age: 34,
    id: 3343,
    address: "something else",
};
console.log(man);
// yaha per humm extends keyword ka use karke kisi bhi interface ka declaration kiya hua kisi dusre ke interface me inharit kar sakte hai
// default parameter
function hello4(msg = "kunal") {
    console.log(msg);
}
hello4();
hello4("Akash");
// optional parameter 
function hello5(mskt) {
    console.log(mskt || "Neeraj Kumar");
}
// hello5();
// hello5("HEllo How are You ");
//  Arrow function Multiply 
let ar = (a, b) => {
    return a + b;
};
// console.log(ar(4, 5));
// CallBack function
function placeOrder(price, callback) {
    const total = price + 10;
    callback(total);
}
placeOrder(10, (total) => {
    console.log(total);
});
function placeOrder2(price2, callback) {
    const total2 = price2 + 20;
    callback(total2);
}
placeOrder2(20, (total2) => {
    console.log(total2);
});
// Rest  Parameter
function sum(...arr) {
    let sum = 0;
    arr.forEach((val) => sum = sum + val);
    console.log(sum);
}
// sum(5,5,5,6,74,3,74,3,54,34,23);
// classes in typescript
class room {
    constructor(name_, age_) {
        this.name = name_;
        this.age = age_;
    }
}
const stu1 = new room("Harikesh", 11);
const stu2 = new room("Rakesh", 19);
// console.log(stu1);
// console.log(stu2);
// Public Private Protected
class Customers {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const P1 = new Customers("Sukesh", 43, 43000);
// console.log(P1);
// console.log(P1.name);
// console.log(P1.age);
// console.log(P1.balance);
// console.log(P1.meet());
class Employee5 extends Customers {
    constructor(id, name, age, balance) {
        super(name, age, balance);
        this.id = id;
    }
}
const P2 = new Employee5(1003, "Ritik", 20, 54000);
// console.log(P2);
// Generic Template
// Example
// function doso(val:(number | string | boolean | number[])):(number | string | boolean | number[]){
//   return val;
// }
// OR
function doso(val) {
    return val;
}
let s1 = doso("Neeraj");
let s2 = doso(100);
let s3 = doso(true);
const objectfirst = {
    name: "Neeraj",
    age: 98,
    balance: "50cr",
    Address: "abcd"
};
console.log(objectfirst.name);
console.log(objectfirst.age);
console.log(objectfirst.balance);
console.log(objectfirst.Address);
