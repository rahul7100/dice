var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1)
var rimg1 = "images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].src = rimg1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber2)
var rimg2 = "images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].src = rimg2;
if(randomNumber1<randomNumber2)
    document.getElementById("res").innerHTML= "Player 2 wins"; 
else if(randomNumber2<randomNumber1)
    document.getElementById("res").innerHTML= "Player 1 wins"; 
else
    document.getElementById("res").innerHTML= "It is a Draw"; 
document.addEventListener('keyup', function(e){
    if(e.keyCode == 13 || e.keyCode == 32)
        window.location.reload();
    })