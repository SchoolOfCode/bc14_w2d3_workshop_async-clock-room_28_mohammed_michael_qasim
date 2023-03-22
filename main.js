const hand = document.querySelector(".hand");

// hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!

// create function that moves the hand 6 degrees 
//create setInterval and feed above function in to it
// make it rotate the hand 6degrees every 1000 ms

let currentAngle = 0

function rotate(){

let newAngle = currentAngle +6 

hand.style.transform = `rotate(${newAngle}deg)`

currentAngle=newAngle

}

setInterval(rotate, 1000);

