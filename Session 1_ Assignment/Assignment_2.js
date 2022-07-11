/*

Predict the output
(Try without coding first)

*/

var grade = "B";
var result = 0; 
switch(grade){
    case "A":{
        result += 10;
        break;
    }
    case "B":{
        result += 20;
    }
    case "C":{
        result += 30;
    }
    default:
        result += 40;
}

console.log(result)