/*

Write a loop to find the Fibonacci series upto 7th number using while loop.

*/


const num = 5
let n1 = 0;
let n2 = 1;
let i=0;
let x=0;

console.log(n1); 


while(i <= num) {

    
    x = n1 + n2;
    n1 = n2;
    n2 = x;
    console.log(n2);
    i++;
}
