/*

Create an array of objects containing student details( name & mark is mandatory) 
and a method to print the marks of each student.

*/

const student = [{"name": "John Britto", "mark": 90, "department": "ECE" }, 
                {"name": "Rahul Eeswar", "mark": 95, "department": "CSE" },
                {"name": "Sanjeev Kumar", "mark": 89, "department": "ME" },
                {"name": "Karthik Panchal", "mark": 80, "department": "EEE" }]

          
student.forEach(element => {
    console.log(element.mark)  
});

