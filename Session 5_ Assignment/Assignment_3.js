/*

Rewrite your previous class to hide its properties

*/

function Vehicle () {
    let engineCc = 1462; // ENCAPSULATION
    this.name = 'Tiago';
    this.EngineDetails = function () {
      
      console.log(`The car ${this.name} has a cubic capacity of ${this.engineCc}.`);
    }
}

const tiago = new Vehicle();
tiago.EngineDetails();

console.log(tiago.name) //valid value
console.log(tiago.engineCc) // undefined
