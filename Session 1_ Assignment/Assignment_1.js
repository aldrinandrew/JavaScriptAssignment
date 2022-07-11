/*
Assignment_1 Question: 

Program to check whether triangle is equilateral, scalene or isosceles
If a, b, c are three sides of a triangle. Then,
● The triangle is equilateral only if a == b == c.
● The triangle is isosceles if either a == b or a == c or b == c.
● A triangle is called the Scalene Triangle, if none of its sides are equal.

(hint: use if... else if and logical operators)
eg:if(a == b && b == c), then the triangle is equilateral.

*/


let a = 10;
let b = 11;
let c = 12

if (a == b && b == c){
    console.log("Equilateral Triangle")
}
else if (a == b || b == c || a == c){
    console.log("Isosceles Triangle")
}
else {
    console.log("Scalene Triangle")
}