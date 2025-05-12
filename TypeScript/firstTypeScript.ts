// jo code hum javascript me likhte hai wah sab code hum typescript me likh sakte hai
// typescript javascript ka papa hai isme sirf data type  batana padta hai baki sab kuch same hai
// typescript is a superset of javascript
let a: number = 10;
let b: number = 50;

// Example assign to another type of data in declared variable
// a="Rohit";

//  how to deal with number
let marks: number = 50;

//  how to deal with bigint
let bignumber: bigint = 2174384738473n;

//  how to deal with string
let str: string = "Neeraj Gupta";

//  how to deal with boolean
let isPass: boolean = true;
isPass = false;

// how to deal with null
let ball: null = null;

// how to deal with undefined
let bat: undefined;
let basket: undefined = undefined;

// compile time language
// Interprted language
// jit : just in time

//  any

let value;
value = 20;
value = "marks";
value = true;

// OR

let mobile: any;
mobile = "Nokia";
mobile = 234;

// there is no checking the type of value only and only use it
// console.log(mobile.toUppercase());

// there are the type of     :     any
// any : this is very dangerous for us because we assigned any type of value it will accpet all the value and dont throw any error

// unknown

let cover: unknown;
cover = "Samsung ultra s25";
cover = 599;
cover = true;

// here first priority chek what type of value then use it
if (typeof cover === "string") console.log(cover.toUpperCase());
if (typeof cover === "number") console.log(cover.toFixed(599));

// Non-Premitive
let arr: number[] = [2, 4, 5, 7, 3, 2, 9];
let arr1 = [54, 30, 98, 56, 34, 76, 67];
let list = ["Mohan", 599, "Suraj"];
let list1: (string | number)[] = ["Mohan", 599, "Suraj"];
let list2: (string | number | boolean)[] = ["Neeraj Gupta", 89, true];

// here jo bhi element ka data type define hota hai keval usi ko hi array me rakh sakte hahi agar koi aur alag type ka data push karne per ERROR throw karega.
// Example like this.

// list1.push(true);

// Tuple

let tuple: [string, number, number] = ["Neeraj", 789, 43];

// tuple me iski size fixed hoti hai hum tuple ke array me jitne bhi element banayenge utne type ke datatype declare karna padega agar hundred element hai to hundred bar datatype declare karna padega

// OBJECT

// inline or ek line me
let obj1: { user: string; age: number; gender: string; isStudent: boolean } = {
  user: "Neeraj",
  age: 18,
  gender: "male",
  isStudent: true,
};
// alag alag line me
let obj2: { user: string; age: number; gender: string; isStudent: boolean };

obj2 = {
  user: "Suraj",
  age: 28,
  gender: "male",
  isStudent: true,
};

//  Using type Alises

type employee = {
  name: string;
  rollNumber: number;
  isPass: boolean;
  id: number;
};

let class_student: employee = {
  name: "sohan",
  rollNumber: 45,
  isPass: true,
  id: 1020,
};

// type me hum keval ek jagah hi datatype declare kar sakte hai
// type me hum dusri jagah ka datatype merge nhi kar sakte hai
// isse datatype ka declareation aashan hota hai
//type aur interface ka work same hi hai
// type ka optimization jaldi nhi hota hai code campile karne per

// Using interface Alises

interface Admin {
  names: string;
  id: number;
}
interface Admin {
  age: number;
  address: string;
}

let Owner: Admin = {
  names: "Krishna",
  id: 5677,
  age: 43,
  address: "Gorakhpur",
};

// interface me hum multiple jagah per datatype declare kar sakte hai
// interface me hum dusri jagah ka datatype merge kar sakte hai
// isse datatype ka declareation aashan hota hai
//type aur interface ka work same hi hai
// interface ka optimization jaldi hota hai code campile karne per

// Optional keyword (?) in object 
interface person{
    name : string,
    age : number,
    salary ? : number,
}

//  here salary is optional chahe hum salary ko mention kare ya na kare iske object ka interface banakar type interface declare kar diya hu isme optional ko declare karne ke liye question mark (?) ka use karte hai  

let employee1 = {
  name : "Neeraj Gupta",
  age : "18",
  salary : 660000,
}
let employee2 = {
  name : "Mohan",
  age : 45,
}


// Pertial Example 1

interface cust1 {
  name : string,
  age : number,
  salary : number,
}

let hello1 : Partial <cust1> = {
  name : "Neeraj Gupta",
  salary : 66000,
}

// Pertial me sabhi data optional rahta hai jiski need ho likhe ya nhi likhe 

let hello2 : Required <cust1> = {
  name : "Mr. Sam",
  age: 34,
  salary : 55000
}

// Required me sabhi data ko likhna important hota hai agar koi data galti se chutt jata hai to error dene lagta hai

let hello3 : Readonly <cust1> = {
  name : "Mr . John",
  age : 34,
  salary  : 23000
}

// aur readonly me hum data ko sirf read kar sakte hai koi changes nhi kar sakte hai 


// Array of objects

// Example 1

let arrayfirst: {name : string, age : number,}[]=[{name : "Aman", age : 19,},{name : "Chaman", age : 29,}]

// Example 2 

interface people {
  name : string,
  id : number,
}

let employee4 : people[]=[{name : "Umakant", id : 767}, {name : "Shubankar ", id : 233}]



// Functions in Typescript 

// first Example with returned value
function namePrint(name : string): string{
  console.log(`hello, ${name}`);
  return (`welcome to ${name}`);
}
// namePrint("Krishna");


// Second Example without retuning any value

function welcome( wel : string) :void {
  console.log(` hello ${wel} how are you`);
}
// welcome("Ankur chaurasiya");

// Example here two interfaces are combined in one array 

interface unit1 {
  user : string,
  password : number,
}
interface unit2 {
  name : string,
  id : number,
}

let greets:(unit1 | unit2)[] =[{
 name : "santosh",
 user : "santosh056",
 password : 12423,
 id : 437483,
}]


// Extend keyword

interface level1{
  name : string;
  age : number;
}
interface level2 extends level1{
  id : number;
  address : string;
}
let man:level2={
  name : "amit",
  age : 34,
  id : 3343,
  address : "something else",
}
console.log(man);

// yaha per humm extends keyword ka use karke kisi bhi interface ka declaration kiya hua kisi dusre ke interface me inharit kar sakte hai


// default parameter
function hello4( msg : string ="kunal"): void{
  console.log(msg);
}
hello4();
hello4("Akash");

// optional parameter 
function hello5 (mskt ? : string  ){
  console.log(mskt || "Neeraj Kumar");
}
// hello5();
// hello5("HEllo How are You ");

//  Arrow function Multiply 

let ar = (a : number , b : number) :number =>{
  return a+b;
}
// console.log(ar(4, 5));

// CallBack function

function placeOrder (price : number, callback : (price : number)=>void):void{
 const total = price +10;
 callback(total);
}

placeOrder(10, (total)=>{
  console.log(total); 
})

// OR

type  omg=(price2 : number)=>void

function placeOrder2 (price2 : number, callback : omg):void{
 const total2 = price2 +20;
 callback(total2);
}

placeOrder2(20, (total2)=>{
  console.log(total2); 
})


// Rest  Parameter

function  sum(...arr : number[]): void{
  let sum : number =0;
  arr.forEach((val: number)=>sum=sum+val);
  console.log(sum);
}

// sum(5,5,5,6,74,3,74,3,54,34,23);

// classes in typescript

class room{
  name : string;
  age : number;
  constructor(name_ : string , age_ : number){
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
  name: string;
  age: number;
  balance: number;
  constructor (name: string, age : number,balance : number){
    this.name = name;
    this.age = age;
    this.balance = balance;
  }

  meet():number{
    this.age = this.age+10;
    return this.age;
  }
}
const P1 = new Customers("Sukesh", 43 , 43000)
// console.log(P1);
// console.log(P1.name);
// console.log(P1.age);
// console.log(P1.balance);
// console.log(P1.meet());


class Employee5 extends Customers{
   id : number;
   constructor(id : number, name : string , age : number , balance : number){
   super( name , age , balance)
    this.id = id;
   }
}

const P2 = new Employee5(1003,"Ritik", 20 , 54000);
// console.log(P2);

// Generic Template
// Example

// function doso(val:(number | string | boolean | number[])):(number | string | boolean | number[]){
//   return val;
// }

// OR

function doso<T> (val:T):T{
  return val;
}

let s1 = doso("Neeraj")
let s2 =doso(100)
let s3 =doso(true)
// console.log(s1);
// console.log(s2);
// console.log(s3);



// second Example 

interface Manager <T, U> {
  name : string,
  age : number,
  balance : T,
  Address : U,
}

const objectfirst :Manager<string , string> ={
  name : "Neeraj",
  age : 98,
  balance : "50cr",
  Address : "abcd"
}

console.log(objectfirst.name);
console.log(objectfirst.age);
console.log(objectfirst.balance);
console.log(objectfirst.Address);












































































































