//for 1st Dice//
n = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + n + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


//for 2nd Dice//
var m = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + m + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//choose winner now//

if(n>m){
    document.querySelector('h1').innerHTML="Kheladi 1 Wins";
}

else if(n<m){
    document.querySelector('h1').innerHTML = " Kheladi 2 Wins"
}

else{
    document.querySelector('h1').innerHTML= "Draw vayo Muji"
}

