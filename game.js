// Array of Colors
var buttonColors = ["red", "blue", "green", "yellow"];
// Array of the Current Game Pattern
var gamePattern = [];
// Array of User Clicked Patter
var userClickedPattern = [];
// Check to see if a key has been pressed to start the game
var gameStart = false;
// Game Play Level
var level = 0;

// Detect if a key has been pressed to start the game or add to userClickedPattern
$(document).keypress(function(e) {
    if (!gameStart) {
        // Change gameStart to true
        gameStart = true;
        // Change heading to Level 0
        $("h1").text("Level 0");

        nextSequence();
    } else if (gameStart) {
        keyPressButtonCheck(e.key);
        console.log("Key Pressed = " + e.key);
    }
})

// Detect if any buttons have been clicked
$("div.btn").on("click", function(e) {
    // User's chosen color
    var userChosenColor = e.target.id;
    // Add user's chosen color to the userClickedPattern array
    userClickedPattern.push(userChosenColor);
    // Check User's last answer with gamePattern
    checkAnswer(userClickedPattern.length-1);
    // Play sound of user chosen color
    playSound(userChosenColor);
    // Animate Pressed Color
    animatePress(userChosenColor);
});

// Random Number Generator Function
function nextSequence() {
    // Clear all past User moves
    userClickedPattern = [];
    // Generate Random Number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    // Random Selected Color from buttonColors
    var randomChosenColor = buttonColors[randomNumber];
    // Add random chosen color to gamePattern
    gamePattern.push(randomChosenColor);

    // Flash Random Chosen Color
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play sound for color
    playSound(randomChosenColor);

    // Animate Press
    animatePress(randomChosenColor);

    // Increase Level and display in heading
    level++;
    $("h1").text(`Level ${level}`);
}

// Check Answer Function
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");
        // CHeck if the sequence is finished
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }
    } else {
        // Play wrong sound
        playSound("wrong");
        // Change background color
        setTimeout(function() {
            $("body").toggleClass("game-over");
            setTimeout(function() {
                $("body").toggleClass("game-over");
            }, 200)
        }, 200);

        // Change the h1 for wrong answer
        $("h1").text("Game Over, Press Any Key to Restart");

        // Call startOver function for wrong answer
        startOver();

        console.log("Wrong");
    }
}

// Start Over function
function startOver() {
    // Reset level
    level = 0;
    // Reset Game Pattern
    gamePattern = [];
    // Reset gameStart
    gameStart = false;
}

// Play Sound Function
function playSound(name) {
    // Color MP3 to play
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

// Animation function
function animatePress(currentColor) {
    // set timeout for pressed class
    setTimeout(function() {
        $(`#${currentColor}`).toggleClass("pressed");
        setTimeout(function() {
            $(`#${currentColor}`).toggleClass("pressed");
        }, 100)
    }, 100);
}

// Keypress function
function keyPressButtonCheck(key) {
    switch (key) {
        case "q":
            userClickedPattern.push("green");
            checkAnswer(userClickedPattern.length-1);
            playSound("green");
            animatePress("green");
            break;
        case "w":
            userClickedPattern.push("red");
            checkAnswer(userClickedPattern.length-1);
            playSound("red");
            animatePress("red");
            break;
        case "a":
            userClickedPattern.push("yellow");
            checkAnswer(userClickedPattern.length-1);
            playSound("yellow");
            animatePress("yellow");
            break;
        case "s":
            userClickedPattern.push("blue");
            checkAnswer(userClickedPattern.length-1);
            playSound("blue");
            animatePress("blue");
            break;
        default:
            $("h1").text("Please Select Q, W, A, oe S");
            playSound("wrong");
    }
}