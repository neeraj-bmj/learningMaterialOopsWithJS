"use strict";
// jo code hum javascript me likhte hai wah sab code hum typescript me likh sakte hai
// typescript javascript ka papa hai isme sirf data type  batana padta hai baki sab kuch same hai
// typescript is a superset of javascript
let a = 10;
let b = 50;
// Example assign to another type of data in declared variable
// a="rohit";
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
console.log(mobile.toUppercase());
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
// interface me hum multiple jagah per datatype declare kar sakte hai
// interface me hum dusri jagah ka datatype merge kar sakte hai
// isse datatype ka declareation aashan hota hai
//type aur interface ka work same hi hai
// interface ka optimization jaldi hota hai code campile karne per
