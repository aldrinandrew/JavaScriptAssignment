/*

Using map() function in array [ 25 , 16 , 9 , 4 , 36 ] make a new array with the square root of the elements 
in the given array. (Use arrow function and Math.sqrt)

*/

const arr1 = [ 25 , 16 , 9 , 4 , 36 ];

let myFunction = (arr1) => {
    arr2 = [];
    for (var i = 0, len = arr1.length; i < len; i++) {
        root = Math.sqrt(arr1[i]);
        arr2.push(root);
    }

    return arr2;
}

console.log(myFunction(arr1));
