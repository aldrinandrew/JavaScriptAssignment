/*
Create an object about your friend.
Two properties
Two functions

*/


let friend = {name: "Jipin Raj",
              age: 22,

              greetingMessage: function(age){
                return("Hi, "+(this.name) + "!" + " Welcome to Kids Park...")
              },


              kidSlideEntry: function(){
                if (this.age <= 12){
                    return ("Entry allowed to slides")

                }
                else {
                    return("Entry not allowed to slides")
                }
              }
              }

console.log(friend.greetingMessage())
console.log(friend.kidSlideEntry())