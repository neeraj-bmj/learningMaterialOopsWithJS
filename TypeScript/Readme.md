<!-- TypeScript ek Transpiler language hai -->

<!-- First we need to install TypeScript Campail  -->
1. npm install -g typescript
2. tsc --version

<!-- How to run TypeScript file -->
tsc file_name
tsc yourfile.ts --target es2016

<!-- Initialize config file -->
tsc --init

<!-- run tsc file   -->
<!-- every  js file will be valid ts -->
<!-- if there is an error in ts still it will complete it into js file  -->
<!-- it will be on the user how to tackle it  -->


<!-- watch mode it is like npm run dev command live changes in code -->
tsc --watch

<!-- how to quit it -->
ctrl + c

<!-- how to deal with number  -->
let marks:number = 50;

<!-- how to deal with bigint  -->
let bignumber:bigint = 5049894859845948n;

<!-- how to deal with string  -->
let name:string = "Neeraj Gupta";

<!-- how to deal with boolean  -->
let isPass:boolean = true;
isPass = false

<!-- how to deal with null -->
let ball:null = null;

<!-- how to deal with undefined -->
let bat:undefined;
let basket:undefined = undefined;

<!-- type inference in typescript refers to the ability of the typescript compailer to autoamtically determine the type of a variable base on the value to assign to it . this means that even if you dont explicitly specific type . typescript can inter the most approrpriate type and apply it. -->

<!-- Explicit type Annovations -->
when wr assigned type by our owm 

<!-- Limitations of type interference -->
any : if we dont initilze the value initally 

<!-- any  -->
let value;
OR
let value:any = 32;
Represents any type of value when a variable has the any type , it can be assigned any value and no type checking is done.


<!-- unknown -->
the any and unknown types in typescript are both used to repersented values of any types.

the unknown type is safar then any because you can not perform operation on an unknown value without first narrowing its type thought type checking.


<!-- None primitive data type -->


<!-- Array  -->
let number:number[] = [54,34,45,65];
let number: (string | number)[] = [2,4,66,54,32,43,"hello"];


<!-- Tuples -->
Tuple :- Tuples are the array with a fixed number of elements of specific types.

let tuple:[string, number] = ["Neeraj Gupta", 89]


<!-- Compile -->
<!-- compile time refers to the phase when the source code translated into machine code or an intermediate formate (e. g.  bytecode ) this is done by a compiler.-->

error deceted at this phase are called compiled time errors. 
Example of compile time error include: 
syntax error (eg. missing semicolons). 
type mismatches (eg. assigning a string to a variable declare as a number in typescript).
Variale declaration without initilization (if required by the language).


<!-- Runtime refers to the phase when the program is executed after it has been compiled (interepted). -->

<!-- Error dectected during this phase are called run time  errors.
Example of run time error includes...
Dividing by zero.
Accessing undefined Variables or null references .
Running out of memory . 
Exmple of run time activities :
Executing code instructions.
Handling user inputs.
  -->


 <!-- OBJECT -->

 let person:{name:string, age:number};
  person ={
    name : "hello ",
    age : 34
 }


 <!-- inline-->
let obj1:{user : string, age : number, gender : string, isStudent : boolean}={
    user : "Neeraj",
    age : 18,
    gender : "male",
    isStudent : true
}


<!-- Using type Alises -->
type student ={
    name : string,
    rollNumber : number,
    isPass : boolean
}

let class_student : student = {
    name : "sohan",
    rollNumber : 45,
    isPass : true
}

















