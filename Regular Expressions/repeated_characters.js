//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // + character the letter s occurs one or more times
let result = difficultSpelling.match(myRegex);

//Match Characters that Occur Zero or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; // * character to matches g and o if there is
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null