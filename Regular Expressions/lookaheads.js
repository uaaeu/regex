//Positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; //positive lookahead
let qRegex = /q(?!u)/; //negative lookahead
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

//a password must be between 3 and 6 characters and at least one number
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

//another password that must greater than 5 character, do not begin with numbers, and have two consecutive digits
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // ^ means start of line with \D non-digits, with ?=\w{5} set the minimum character is 5, and with ?=\w*\d{2} zore or more character and 2 digits side by side 
let result = pwRegex.test(sampleWord);