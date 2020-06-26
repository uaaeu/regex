//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // + character the letter s occurs one or more times
let result = difficultSpelling.match(myRegex);