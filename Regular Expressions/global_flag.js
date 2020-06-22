//to search or extract a pattern more than once use global flag g like /global/g
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex)