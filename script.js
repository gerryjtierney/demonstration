//this script looks in the document, looks for an element by its id "pop" and then
//inserts the html into it as written here

document.getElementById("pop").innerHTML= "<button id='button1'>name button</button> <button id='button2'>fruit button</button>"




//here we are making two functions which we can call later


//this function prompts the player for an input and sets its variable firstName to whatever the input was
//same for secondName
//it then makes fullName equal to them both together, plus a space between them
//it then alerts the player with the message you see
function getNames(){
    let firstName = prompt("What's your first name?");
    let secondName = prompt("What's your second name?");
    let fullName = (firstName + " " + secondName);
    alert("Thanks " + fullName);
}


//in this function "fruits" is an array, in python it's called a list but everywhere else it's called an array
//it prompts the player for a number and sets playerChoice to that number
//it then alerts the player what their fruit was, with "playerChoice" signifying whatever
//item in the array is equal to the number the player gave
//arrays always start at position 0
function showMeAFruit(){
    let fruits = ["banana", "apple", "pineapple"];
    let playerChoice = prompt("Give me a number between 0 and 2");
    alert("Your choice of fruit was " + fruits[playerChoice])
} 




//now we can look the for the buttons by their ids and add some functionality to them
//same as before, it looks in the document, gets the element in question by its id
//adds an eventListener to it
//event listeners take in two parameters: what to listen for, and what to do when they hear it
//in our case we want the buttons to listen for when they're clicked, and then perform
//the functions we assigned them

document.getElementById("button1").addEventListener("click", getNames);


document.getElementById("button2").addEventListener("click", showMeAFruit);





//one last thing which is super handy to know and use
//right click on the webpage and then inspect
//you'll see a "console" tab, this is handy for debugging and checking things are working
//for example, the script below should go to the console and log whatever is in the brackets

console.log("Hello I'm checking the console log works")




//there are a lot of dots in js and I think it's called "dot notation", basically it
//gives js step by step instructions of what to do, basically. you can chain loads of them together

//don't want to overwhelm you so I'll leave it here
//my advice is to make a copy of these files and edit them and play around, you'll
//honestly get a much better understanding by doing it yourself and seeing if
//what you think should work actually works or not.

