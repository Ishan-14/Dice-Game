var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var img1=document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var img2=document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    var heading=document.querySelector("h1");
    heading.innerHTML="Player 1 wins";
}

if(randomNumber1<randomNumber2){
    var heading=document.querySelector("h1");
    heading.innerHTML="Player 2 wins";
}
if(randomNumber1==randomNumber2){
    var heading=document.querySelector("h1");
    heading.innerHTML="Draw";
}