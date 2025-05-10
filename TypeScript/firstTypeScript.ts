// jo code hum javascript me likhte hai wah sab code hum typescript me likh sakte hai
// typescript javascript ka papa hai isme sirf data type  batana padta hai baki sab kuch same hai
// typescript is a superset of javascript
let a: number = 10;
let b: number = 50;

// Example assign to another type of data in declared variable
// a="rohit";

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
console.log(mobile.toUppercase());

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
