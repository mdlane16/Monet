// Ask the user for their first name and store it in the variable Fname
let Fname = prompt("What is your first name?");

// Create a constant for the value of Pi
const piValue = 3.1415926;

// Ask the user to input their favorite number and store it in a variable
let myFavNum = prompt("What is your favorite number?");

// Convert the input to a number
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle using the user's favorite number as the radius
let myArea = piValue * Math.pow(myFavNum, 2);

// Create the final message including all variables and descriptions
let message = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle’s area would be ${myArea.toFixed(6)}.`;

// Display the message on the webpage
document.getElementById("outputMessage").innerText = message;

// Also log to the console for good measure
console.log("Fname:", Fname);
console.log("piValue:", piValue);
console.log("myFavNum:", myFavNum);
console.log("myArea:", myArea);
