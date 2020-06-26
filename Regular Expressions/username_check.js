//Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d\d+|[a-z]+\d*)$/i; //must starts with letter, after first letter it should be two number or one or more letter and number at the and with insensitive flag 
let result = userCheck.test(username);

/*
1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
