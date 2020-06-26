//Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // its only match if there is 'Cal' in the beginning of the string 
let result = calRegex.test(rickyAndCal);