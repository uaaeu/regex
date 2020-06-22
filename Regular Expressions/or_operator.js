// OR | operator for search multiple patterns
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; //going to search on of this
let result = petRegex.test(petString);