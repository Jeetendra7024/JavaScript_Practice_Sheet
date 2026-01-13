// Conditinal Statements in JavaScript

let age1 = 20;
if (age1 < 18) {
    console.log("You are a minor.");
} else if (age1 >= 18 && age1 < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

// Ternary Operator

let age2 = 70;
let status = (age2 < 18) ? "minor" : (age2 >= 18 && age2 < 65) ? "adult" : "senior";
console.log(`You are an ${status}.`);


// Switch Statement

let day = 3;
switch (day) {
    case 1:
            console.log("Monday");
               break;
          case 2:  
          
            console.log("Tuesday");
               break;
          case 3:
            console.log("Wednesday");
               break;
          case 4:
            console.log("Thursday");         
                break;
          case 5:
            console.log("Friday"); 
               break;
          case 6:
            console.log("Saturday"); 
               break;
          case 7:
            console.log("Sunday"); 
               break;  
          default:
            console.log("Invalid day");       
}


// End of Conditional Statements in JavaScript
// Compare this snippet from JavaScript/operaters.js:

let age = 22;
if (age < 18) {
    console.log(" junior");
} else if (age > 65) {
    console.log("adult.");
} else {
    console.log("You are a senior.");
}


////  continue and break statement


let n = 8;
for (let i = 1; i <= 8; i++){
     if (i === 3) {
        continue;
    }
    console.log(n * i);
}  









