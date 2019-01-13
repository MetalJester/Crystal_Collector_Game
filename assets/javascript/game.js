$(document).ready(function () {
    // set values for the game
    var crystalNum1 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 1
    var crystalNum2 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 2
    var crystalNum3 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 3
    var crystalNum4 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 4
    var randomNumber = Math.floor((Math.random() * 102) + 19); // generates a random number between 19 and 102 as the player's goal

    console.log(crystalNum1, crystalNum2, crystalNum3, crystalNum4, randomNumber)// developer check

    $(".crystal").on("click", function () {
        alert("I've been clicked");

    });


});




