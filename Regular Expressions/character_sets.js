//Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // a to z character set with global and insensitive flags
let result = quoteSample.match(alphabetRegex); //matches all the letters