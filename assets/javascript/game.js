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

    function resetGame() {
        score = 0; // resets the player's score
        computerNumber = Math.floor((Math.random() * 102) + 19);
        $("#yourScore").text(score);
        $("#randomNumber").text(computerNumber);
        crystalNum1 = Math.floor((Math.random() * 12) + 1);
        crystalNum2 = Math.floor((Math.random() * 12) + 1);
        crystalNum3 = Math.floor((Math.random() * 12) + 1);
        crystalNum4 = Math.floor((Math.random() * 12) + 1);
        console.log(crystalNum1, crystalNum2, crystalNum3, crystalNum4); // developer check
    };

    $("#crystal-01").on("click", function () {
        console.log(crystalNum1);
        score = score += crystalNum1;
        $("#yourScore").text(score);
        if (score === computerNumber) {
            alert("You won! Can you do it again?");
            numWon++;
            $("#win").html("Wins: " + numWon);
            resetGame();
        } else if (score > computerNumber) {
            alert("You lost! Try again.");
            numLost++;
            $("#lose").html("Losses: " + numLost);
            resetGame();
        }

    });

    $("#crystal-02").on("click", function () {
        console.log(crystalNum2);
        score = score += crystalNum2;
        $("#yourScore").text(score);
        if (score === computerNumber) {
            alert("You won! Can you do it again?");
            numWon++;
            $("#win").html("Wins: " + numWon);
            resetGame();
        } else if (score > computerNumber) {
            alert("You lost! Try again.");
            numLost++;
            $("#lose").html("Losses: " + numLost);
            resetGame();
        }

    });

    $("#crystal-03").on("click", function () {
        console.log(crystalNum3);
        score = score += crystalNum3;
        $("#yourScore").text(score);
        if (score === computerNumber) {
            alert("You won! Can you do it again?");
            numWon++;
            $("#win").html("Wins: " + numWon);
            resetGame();
        } else if (score > computerNumber) {
            alert("You lost! Try again.");
            numLost++;
            $("#lose").html("Losses: " + numLost);
            resetGame();
        }

    });

    $("#crystal-04").on("click", function () {
        console.log(crystalNum4);
        score = score += crystalNum4;
        $("#yourScore").text(score);
        if (score === computerNumber) {
            alert("You won!");
            numWon++;
            $("#win").html("Wins: " + numWon);
            resetGame();
        } else if (score > computerNumber) {
            alert("You lost! Try again.");
            numLost++;
            $("#lose").html("Losses: " + numLost);
            resetGame();
        }

    });





})



