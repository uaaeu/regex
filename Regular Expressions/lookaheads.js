//Positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; //positive lookahead
let qRegex = /q(?!u)/; //negative lookahead
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

