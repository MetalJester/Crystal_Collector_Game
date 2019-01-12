console.log("I am here");


var crystalNum1 = Math.floor((Math.random() * 12) + 1);
var crystalNum2 = Math.floor((Math.random() * 12) + 1);
var crystalNum3 = Math.floor((Math.random() * 12) + 1);
var crystalNum4 = Math.floor((Math.random() * 12) + 1);
var randomNumber = Math.floor((Math.random() * 102) + 19);
   

console.log(crystalNum1);
console.log(crystalNum2);
console.log(crystalNum3);
console.log(crystalNum4);
console.log(randomNumber);



$(document).ready(function () {
    $(".crystal").on("click", function () {
        alert("I've been clicked");

    });


});

