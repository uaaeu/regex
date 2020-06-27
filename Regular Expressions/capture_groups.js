//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // define beggining and end line with ^ and $, (\d+) groups first digits, \1 test next digits with the first group
let result = reRegex.test(repeatNum); //return true

//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // three groups captured with id $1 $2 $3
let replaceText = "$3 $2 $1"; // text to replace reverse
let result = str.replace(fixRegex, replaceText); // return "three two one"