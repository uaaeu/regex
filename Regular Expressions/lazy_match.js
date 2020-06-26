//Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // . for any character, * for repeat zero or more and ? for make it lazy and return <h1> only
let result = text.match(myRegex);
