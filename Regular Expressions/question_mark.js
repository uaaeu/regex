//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/i; //question mark u? checks u letter for zero or one of the preceding element 
let result = favRegex.test(favWord); //returns true
