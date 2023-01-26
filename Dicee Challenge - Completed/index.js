document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImagine = "images/" + "dice" + randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",  randomDiceImagine);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImagine2 = "images/" + "dice" + randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[1].setAttribute("src",  randomDiceImagine2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNumber2 > randomNumber1 ) {
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}

}