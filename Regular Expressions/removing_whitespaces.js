//Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // matches spaces at the start and the end of the line
let result = hello.replace(wsRegex, ""); // replace spaces with nothing
//returns "Hello, World"