//Check For Mixed Grouping of Characters
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; //grouping with ()
testRegex.test(testStr); // Returns true

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // checks the name with(|) if its Franklin or Eleanor, with .* allows for middle names
let result = myRegex.test(myString); // returns true