/*

Inheritance

*/

class tataVehicle {  
    constructor() {  
      this.company="Tata";  
    }  
  }
  class Car extends tataVehicle {  
    constructor(name, price) {  
     super();  
      this.name = name;  
      this.price = price;  
    }   
  }  
  var x = new Car("Tiago", "760594");  
  console.log(x.company + " " + x.name + " " + x.price);
  