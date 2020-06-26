// Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // \w is uqual to [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;

//other examples
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

//opposite of \w
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // opposite of \w is \W with uppercase and its equal to [^A-Za-z0-9_]
let result = quoteSample.match(nonAlphabetRegex).length;


//Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // \d is equal to [0-9]
let result = movieName.match(numRegex).length;

//Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // \D is opposite of \d and its equal to [^0-9]
let result = movieName.match(noNumRegex).length;