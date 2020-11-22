// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  if(userInput[0] >= userInput[1] && userInput[0] >= userInput[2])
    console.log(userInput[0]);
  if(userInput[1] >= userInput[2] && userInput[1] >= userInput[0])
    console.log(userInput[1]);
  if(userInput[2] >= userInput[0] && userInput[2] >= userInput[1])
    console.log(userInput[2]);
  

  //end-here
});