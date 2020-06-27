//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // with h{3,6} regex only match with h letter repeated between 3 and 6
let result = ohRegex.test(ohStr); //returns true

//Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // with z{4,} regex matches minimum 4 times repeated z letter
let result = haRegex.test(haStr); //returns true

//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // with m{4} regex matches only 4 times repeated m letter
let result = timRegex.test(timStr);
