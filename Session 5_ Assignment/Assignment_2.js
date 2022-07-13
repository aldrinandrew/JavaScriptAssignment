/*

Create a vehicle class
Should have 3 properties and 2 functions

*/


class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;         //Property 1
      this.maker =  maker;      //Property 2
      this.engine = engine;     //Property 3
    }
    //Function 1
    getDetails(){                   
        return (`The name of the car is ${this.name} and is manufactured by ${this.maker}`)
    }
    //Function 2
    getEngineDetails(){             
        return(`The car ${this.name} has a cubic capacity of ${this.engine}.`)
    }
  }
  
  
  let car1 = new Vehicle('Tiago','Tata','1462cc');
  let car2 = new Vehicle('Creta','Hyundai','1497cc');
    

  console.log(car1.getDetails());
  console.log(car2.getEngineDetails());
  