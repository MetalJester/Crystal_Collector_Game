$(document).ready(function () {
    // set values for the game
    var crystalNum1 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 1
    var crystalNum2 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 2
    var crystalNum3 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 3
    var crystalNum4 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 4
    var computerNumber = Math.floor((Math.random() * 102) + 19); // generates a random number between 19 and 102 as the player's goal

    console.log(crystalNum1, crystalNum2, crystalNum3, crystalNum4, computerNumber)// developer check

    // variables for counters
    var score = 0;
    var numWon = 0;
    $("#Win").text("Wins: " + numWon); // sends the value of numWon to the html div
    var numLost = 0;
    $("#lose").text("Losses: " + numLost); // sends the value of numWon to the html div

    $("#randomNumber").text(computerNumber);// calls html location inserts the random number that is player's goal

    $("#crystal-01").on("click", function () {
        $("#crystal-01").on("click", function () {
            console.log(crystalNum1);
            score = score += crystalNum1;
            $("#yourScore").text(score);

        });


    })
})
