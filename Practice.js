// prompt the user to enter their fullname . generate a username for them based on the input . with the following rules fullname and ending with  the  fullname length example "@Apnacollege13";; 

let fullname = prompt("Enter your full name:");
let username = "@" + fullname + fullname.length;
console.log("Generated username:", username);


