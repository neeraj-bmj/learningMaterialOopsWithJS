<!-- Version -->

version :           18.2.3

first  ->        Major
second  ->       Minor
third  ->        Patch

1 - Patch : agar isme update hota hai to iska matlab hai ki isme koi bug fix hua hai yaha bug ka matlab hai koi chota mota changes in our code.

2 - Minor : agar isme update hota hai to iska matlab hai koi new function add hua hai lekin jo purana version hai wah tab bhi chalta rahega 

3 - Minor : agar isme update hota hai to iska matlab hai ki pure code me changes ho sakte hai ya kuch hi function me changes ya updation hua hai.

<!-- Here the Example of all changes of version like major minor patch -->

version :  18.3.4

<!-- Example -->

function add(a+b){
    sum = a+b;
    return sum;
}

<!-- Example for Patch-->
version :  18.3.5

function add(a+b){
    return a+b;
}

<!-- Example for Minor-->
version :  18.4.5

function add(a+b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

<!-- Example for Major-->
version :  19.4.5   OR   version :  19.0.0

function add(a+b+c){
    return a+b+c;
}

function sub(a,b){
    return a-b;
}

<!-- Important note -->
version :  ^ 19.0.0
^ = carrot symbol OR xor 

yaha per ( ^ ) iska matlab hai ki hum apne code me Minor and Patches ko le sakte hai

version :  ~ 19.0.0
~ = tild

yaha per ( ~ ) iska matlab hai ki hum apne code me keval Patches hi le sakte hai
