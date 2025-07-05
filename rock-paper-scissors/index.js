var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomNumber2 = Math.floor(Math.random() * 3) + 1;

document.querySelector(".img1").src = "/images/item"+ randomNumber1 +".png";
document.querySelector(".img2").src = "/images/item"+ randomNumber2 +".png";

if(randomNumber1==1&&randomNumber2==1){
    document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1==1&&randomNumber2==2){
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomNumber1==1&&randomNumber2==3){
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else if(randomNumber1==2&&randomNumber2==1){
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else if(randomNumber1==2&&randomNumber2==2){
    document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1==2&&randomNumber2==3){
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomNumber1==3&&randomNumber2==1){
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomNumber1==3&&randomNumber2==2){
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else if(randomNumber1==3&&randomNumber2==3){
    document.querySelector("h1").textContent = "Draw!";
}