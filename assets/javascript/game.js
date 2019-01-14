$(document).ready(function () {

    // set values for the game
    var crystalNum1 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 1
    var crystalNum2 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 2
    var crystalNum3 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 3
    var crystalNum4 = Math.floor((Math.random() * 12) + 1); // generates a random number between 1 and 12 for crystal 4

    var computerNumber = Math.floor((Math.random() * 102) + 19); // generates a random number between 19 and 102 as the player's goal
    $("#randomNumber").text(computerNumber);// calls html location inserts the random number that is player's goal

    // console.log(crystalNum1, crystalNum2, crystalNum3, crystalNum4, computerNumber)// developer check

    // variables for counters
    var score = 0;// sets score to zero
    $("#yourScore").text(score); // sends the value of your score to the html div
    var numWon = 0; // sets number of games won to zero
    $("#Win").text("Wins: " + numWon); // sends the value of numWon to the html div
    var numLost = 0; // sets number of games lost to zero
    $("#lose").text("Losses: " + numLost); // sends the value of numWon to the html div

    
    // Function for resetting the game after each win or loss
    function resetGame() {
        score = 0; // resets the player's score
        $("#yourScore").text(score); // sends the value of your score to the html div
        computerNumber = Math.floor((Math.random() * 102) + 19); // generates a new number as the player's goal        
        $("#randomNumber").text(computerNumber); // sends the value of the player's goal number to the html div
        crystalNum1 = Math.floor((Math.random() * 12) + 1); // generates a new random number for Crystal 1
        crystalNum2 = Math.floor((Math.random() * 12) + 1); // generates a new random number for Crystal 2
        crystalNum3 = Math.floor((Math.random() * 12) + 1); // generates a new random number for Crystal 3
        crystalNum4 = Math.floor((Math.random() * 12) + 1); // generates a new random number for Crystal 4
        // console.log(crystalNum1, crystalNum2, crystalNum3, crystalNum4); // developer check
    };

    // sets the function for when the game is won
    function winGame() {
        $('audio#audioWin')[0].play(); // plays an audio file when you win
        alert("You won! Can you do it again?"); // pops up an alert telling you that you won
        numWon++; // increases the counter for number of games won
        $("#win").html("Wins: " + numWon); // sends the number of games won to display in the html div
        resetGame(); // calls the function to reset the game
    }
    // sets the function for when the game is lost
    function loseGame() {
        $('audio#audioLose')[0].play(); // plays an audio file when you lose
        alert("You lost! Try again."); // pops up an alert telling you that you won
        numLost++; // increase the counter for number of games lost
        $("#lose").html("Losses: " + numLost); // sends the number of games lost to display in the html div
        resetGame(); // calls the function to reset the game
    }

    // game function for Crystal 1
    $("#crystal-01").on("click", function () {
        // console.log(crystalNum1); // developer check
        score = score += crystalNum1; // increase your score each time crystal 1 is clicked
        $("#yourScore").text(score); // sends the score to the html div
        if (score === computerNumber) { // if statement for a win
            winGame(); // calls the function for winning a game
        } else if (score > computerNumber) { // else statement for a loss
            loseGame(); // calls the function for losing a game
        }

    });

    // game function for Crystal 2
    $("#crystal-02").on("click", function () {
        // console.log(crystalNum2); // developer check
        score = score += crystalNum2; // increase your score each time crystal 2 is clicked
        $("#yourScore").text(score); // sends the score to the html div
        if (score === computerNumber) { // if statement for a win
            winGame(); // calls the function for winning a game
        } else if (score > computerNumber) { // else statement for a loss
            loseGame(); // calls the function for losing a game
        }

    });

    // game function for Crystal 3
    $("#crystal-03").on("click", function () {
        // console.log(crystalNum3); // developer check
        score = score += crystalNum3; // increase your score each time crystal 3 is clicked
        $("#yourScore").text(score); // sends the score to the html div
        if (score === computerNumber) { // if statement for a win
            winGame(); // calls the function for winning a game
        } else if (score > computerNumber) { // else statement for a loss
            loseGame(); // calls the function for losing a game
        }

    });

    // game function for Crystal 4
    $("#crystal-04").on("click", function () {
        // console.log(crystalNum4); // developer check
        score = score += crystalNum4; // increase your score each time crystal 4 is clicked
        $("#yourScore").text(score); // sends the score to the html div
        if (score === computerNumber) { // if statement for a win
            winGame(); // calls the function for winning a game
        } else if (score > computerNumber) { // else statement for a loss
            loseGame(); // calls the function for losing a game
        }

    });





})



