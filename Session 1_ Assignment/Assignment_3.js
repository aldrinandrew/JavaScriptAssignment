/*

Program to create calculator using switch case

● Store operands and operators in some variable say num1, op and num2.(use
appropriate scoping rule var, let const)
● Switch the value of op i.e. switch(op).
● There are four possible values of op i.e. '+', '-', '*' and '/'.
● For case '+' perform addition and store result in some variable i.e. result = num1 +
num2.
● Similarly for case '-' perform subtraction and store result in some variable i.e. result
= num1 - num2.etc
● console the result at the end of the code.

*/

var num1 = 10;
var num2 = 20;
var result;
var op = "+";

switch(op){
    case "+":{
        result = num1 + num2;
        break;
    } 
    case "-":{
        result = num1 - num2;
        break;
    }
    case "*":{
        result = num1 * num2;
        break;
    }
    case "/":{
        result = num1 / num2;
        break;
    }
}

console.log(result)


