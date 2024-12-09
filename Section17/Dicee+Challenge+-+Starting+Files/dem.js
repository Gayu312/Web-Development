n = Math.random() *6;
randomNumber1 = Math.floor(n)+1;

var diceImage = "dice" + randomNumber1 + ".png";

    
document.getElementsByClassName("img1").src = diceImage;





function rollDice() {
    // Generate a random number from 1 to 6
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    // Create the image file name
    var diceImage = "dice" + randomNumber1 + ".png";

    // Set the image source to show the correct dice image
    document.getElementById("diceImage").src = diceImage;
}