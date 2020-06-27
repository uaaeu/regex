//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // define beggining and end line with ^ and $, (\d+) groups first digits, \1 test next digits with the first group
let result = reRegex.test(repeatNum); //return true
