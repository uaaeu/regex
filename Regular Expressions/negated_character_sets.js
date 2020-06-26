//Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // making a negated character set with ^
let result = quoteSample.match(myRegex); // matches that the characters are not vowel and number