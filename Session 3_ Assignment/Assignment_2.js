/*

Create a json object and convert it to JavaScript object, 
add a new property to that object and delete one existing property.

*/

let text = '{ "students" : [' +
'{ "firstName":"Aldrin" , "lastName":"Andrew" },' +
'{ "firstName":"Sanjeev" , "lastName":"Kumar" },' +
'{ "firstName":"Sagar" , "lastName":"Alias" } ]}';

const obj = JSON.parse(text);

console.log(obj)

