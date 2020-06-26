//Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // it matches if there is caboose at the end of the string with $ key
let result = lastRegex.test(caboose);
