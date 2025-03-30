let score = "33"
// console.log(typeof score)

let valuenumber = Number(score)
// console.log(typeof valuenumber)

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

// let isloggedin = 0
// let boolisloggedin = Boolean(isloggedin)
// console.log(boolisloggedin)

// 1 => true
// 0 => false
// "" => false
// "ashish" => true

// let somenumber = 33
// let stringnumner = String(somenumber)
// console.log(typeof stringnumner)

// ************* operations ****************

let value = 3
let negvalue =  - value;
// console.log(negvalue)
// console.log(2/3) // we get 0.6666 decimal value not int value becz In some programming languages like C++ and Java, integer division (int / int) results in an integer, discarding the decimal part. However, JavaScript does not have integer division—it always performs floating-point division because all numbers in JavaScript are represented as 64-bit floating-point numbers (IEEE 754 standard).

// console.log(2**3) // 2 ki power 3 

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

//    console.log("1" + 2);
//    console.log(1 + "2");
//    console.log("1" + 2 + 2);
//     console.log(1 + 2 + "2");

// console.log(+true) // => 1
// console.log(+"") // => 0

let x = 3;
// let y = x++; // phle use kro fir increment karo  => y = 3, x =4
let y = ++x // phle increment karo fir use karo  => x=4,y=4

console.table([x,y])