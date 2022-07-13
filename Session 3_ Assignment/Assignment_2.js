/*

Create a json object and convert it to JavaScript object, 
add a new property to that object and delete one existing property.

*/

let text = '{"firstName":"Aldrin" , "lastName":"Andrew" , "roll_no":1}'

const obj = JSON.parse(text);
console.log(obj)

obj.dept = "ECE"      //Adding New Property
console.log(obj)

delete obj.roll_no    //Deleting New Property
console.log(obj)

