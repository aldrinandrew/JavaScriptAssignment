/*

[ 25 , 16 , 9 , 4 , 36 ]

For the same array given above use filter() to extract the even numbers into another array. 
And sort() the resultant array.

*/

const arr = [ 25 , 16 , 9 , 4 , 36 ];
const arr_even = arr.filter(evenNumber);


function evenNumber(num) {
    return num%2 == 0;

}


console.log(arr_even);