var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + randomNumber1 +".png";
var sourceImage = "./images/" + randomImage1;
var imageLeft = document.querySelectorAll("img")[0];
imageLeft.setAttribute("src", sourceImage);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var sourceImage2 = "./images/"+ randomImage2;
var imageRight = document.querySelectorAll("img")[1];
imageRight.setAttribute("src", sourceImage2);

// for title
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player 1 wins, congratulations! "
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="  🚩 Player 2 wins, congratulations!"
}
else{
    document.querySelector("h1").innerHTML="Its a tie!"
}
