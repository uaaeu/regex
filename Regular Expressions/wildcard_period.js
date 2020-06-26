//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // the wildcard character . will match any one character
let result = unRegex.test(exampleStr);