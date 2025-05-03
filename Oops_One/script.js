// Example
let obj = {
    name : "Neeraj Gupta",
    age : 18,
    greet : function(){
        console.log("Hello i am " + this.name +"!");
    }
}

// object function
// agar function ko kabhi bhi call karte wakt tumne new ka use kar liya hai to turant man me ek new blank object banao
// aur jab bhi kisi function me this keyword ko dekho to turant us blank object ko yaad karke us jagah per rakh do

// 1)
function Ghar(){
    this.city = "Delhi",
    this.rooms = 3,
    this.kitchen =1,
    this.bathroom =2
}
let Ghar1 =new Ghar();
// purana tarika jab object banane ka ek constructor function se jab javascript mein class ka concept nahi tha

//2)
function toffee(){
    this.flavor = "chocolate",
    this.shape = "round",
    this.size = "small",
    this.expiry = "2027-12-31"
    this.taste = function(){
        console.log("I am " + this.flavor + " toffee of " + this.shape + " shape and " + this.size + " size. This is expired in " + this.expiry + ".");
    }
}
let toffee1 = new toffee();

// CALL

// console.log(toffee1.flavor);
// toffee1.taste();

// 3) With the help of constructor function
function Car(brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.CarInfo = function(){
        console.log("This is a " + this.color + " " + this.brand + " " + this.model + " from " + this.year + ".");
    }
}
let car1 = new Car("Toyota", "Corolla", 2020, "red");
let car2 = new Car("Honda", "Civic", 2021, "blue");
let car3 = new Car("Ford", "Mustang", 2022, "black");
let car4 = new Car("Chevrolet", "Camaro", 2023, "yellow");
let car5 = new Car("Nissan", "Altima", 2024, "white");
let car6 = new Car("Hyundai", "Elantra", 2025, "green");
let car7 = new Car("Kia", "Forte", 2026, "purple");
let car8 = new Car("Subaru", "Impreza", 2027, "orange");
let car9 = new Car("Mazda", "3", 2028, "pink");
let car10 = new Car("Volkswagen", "Jetta", 2029, "brown");

// call

// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
// console.log(car5);
// console.log(car6);
// console.log(car7);
// console.log(car8);
// console.log(car9);
// console.log(car10);
console.log(car10.CarInfo());



// 4) With the help of class
class Car1{
    constructor(brand, model, year, color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.CarInfo = function(){
            console.log("This is a " + this.color + " " + this.brand + " " + this.model + " from " + this.year + ".");
        }
    }
}
let car11 = new Car1("Audi", "A4", 2020, "red");
let car12 = new Car1("BMW", "X5", 2021, "blue");
let car13 = new Car1("Mercedes", "C-Class", 2022, "black");
let car14 = new Car1("Lexus", "RX", 2023, "yellow");
let car15 = new Car1("Porsche", "Cayenne", 2024, "white");

// CALL
// console.log(car11);
// console.log(car12);
// console.log(car13);
// console.log(car14);
// console.log(car15);

console.log(car15.CarInfo());