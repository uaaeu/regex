//to igrone case use regex with insensitive flag 'i' like /insensitive/i
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i after / ignores upper or lowercase
let result = fccRegex.test(myString);