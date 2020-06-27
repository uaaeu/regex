//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // with h{3,6} regex only match with h repeated between 3 and 6
let result = ohRegex.test(ohStr); //returns true
