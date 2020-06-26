//Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // a to z character set with global and insensitive flags
let result = quoteSample.match(alphabetRegex); //matches all the letters


//Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // h to s and 2 to 6 character set with global and insensitive flags
let result = quoteSample.match(myRegex); //matchs only h to z letters and 2 to 6 numbers
