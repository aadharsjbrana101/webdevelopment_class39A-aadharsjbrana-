// function greet (name) {
//     console.log(`Hello, ${name}!`);
// }
// greet ("Ram");

// function sum(num1, num2) {
//     let sum = 0;
//     sum = num1 + num2;
//     return sum;
// }
// console .log(sum(5, 10));

//multiplication of three
// function product(multiplicaiton) {
//     let product = 1;
//     for (let i = 0; i < multiplicaiton.length; i++) {
//         product *= multiplicaiton[i];
//     }
//     return product;
// }  
// console.log(product([2, 3, 4]))

//wap using function calculate grade of a studnet 70+=first division, 60+=second division, 50+=third division, 40+=pass, <40 fail
// function calculateGrade(marks) {
//     let grade;

//     if (marks >= 70) {
//         return grade = "First Division";
//     }
//     else if (marks >= 60) {
//         return grade = "Second Division";
//     }
//     else if (marks >= 50) {
//         return grade = "Third Division";
//     }
//     else if (marks >= 40) {
//         return grade = "Pass";
//     }
//     else {
//         return grade = "Fail";
//     }
// }
// console.log(calculateGrade(75)); 

// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("Ram");

// see if the number is divisible by 8 or not 
// const isDivisibleBy8 = function(num) {
//     return num % 8 === 0;
// }
// console.log(isDivisibleBy8(15));

// const greet = (name) => {
//     console.log(`Hello, ${name}!`);
// }
// greet("Ram");

// calculate grade using arrow function 
// const calculateGrade =(marks) =>{
//     let grade;
//     if (marks >= 70) {
//         grade = "First Division";
// }    else if (marks >= 60) {
//         grade = "Second Division";
// }   else if (marks >= 50) {
//         grade = "Third Division";
// }   else if (marks >= 40) {
//         grade = "Pass";
// }    else {
//         grade = "Fail";
// }
//     return grade;
// }
// console.log(calculateGrade(75));

// const sayHello = (name) => {
//     console.log("Hello " + name);
// };

// const processUser = (name, action) => {
//     console.log("Processing user...");
//     action(name);
// };

// processUser("Ram", sayHello);

// wap using call back function find addition, subtraction, multiplication, and division of two numbers

const add = (num1,num2) => {
    return num1 + num2;
}
const subtract = (num1,num2) => {
    return num1 - num2;
}
const multiplicaiton = (num1,num2) => {
    return num1 * num2;
}
const division = (num1,num2) => {
    return num1 / num2;
}
const calculate=(num1,num2,operation) => {
    return operation(num1,num2);
}
// calculate (10,5,add);
// calculate (10,5,subtract);
// calculate (10,5,multiplicaiton);
// calculate (10,5,division); 