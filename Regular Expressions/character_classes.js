//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // character class with global and insensitive flags
let result = quoteSample.match(vowelRegex); //matchs all vowels in string