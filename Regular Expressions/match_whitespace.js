//Matching Whitespaces
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; //matches all the whitespaces with \s (lowercase)
let result = sample.match(countWhiteSpace); //returns [ ' ', ' ', ' ', ' ', ' ' ]


//Matching Non-Whitespace Characters
let countNonWhiteSpace = /\S/g; //matches all the NON-whitespaces with \S (UPPERCASE)
let resultNon = sample.match(countNonWhiteSpace); 
//returns [ 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's' ]