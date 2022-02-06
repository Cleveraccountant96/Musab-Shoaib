var player1="Player 1";
var player2="Player 2";

function editNames(){
        player1=promt("Change Player1 name");
        player2=prompt("Change Player2 name");
        document.querySelector("p.player1").innerHTML=player1;
        document.querySelector("p.player2").innerHTML=player2;
}
function rollthedice(){
    setTimeout(function(){
        var randomNumber1 = Math.floor(Math.random()*6)+1;
        var randomNumber2 = Math.floor(Math.random()*6)+1;
        document.querySelector(".dice1").setAttribute("src","img/dice"+randomNumber1+".png");
        document.querySelector(".dice2").setAttribute("src","img/dice"+randomNumber2+".png");
    if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="Draw"}
    else if(randomNumber1 >randomNumber2){
        document.querySelector("h1").innerHTML=(player1 +"Winner")}
    else {document.querySelector("h1").innerHTML=(player2 +"Winner")}
    },2500);
}