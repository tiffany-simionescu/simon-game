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

// Detect if a key has been pressed to start the game
$(document).keypress(function() {
    if (!gameStart) {
        // Change gameStart to true
        gameStart = true;
        // Change heading to Level 0
        $("h1").text("Level 0");

        nextSequence();
    }
})

// Detect if any buttons have been clicked
$("div.btn").on("click", function(e) {
    // User's chosen color
    var userChosenColor = e.target.id;
    // Add user's chosen color to the userClickedPattern array
    userClickedPattern.push(userChosenColor);
    // Play sound of user chosen color
    playSound(userChosenColor);
    // Animate Pressed Color
    animatePress(userChosenColor);
});

// Random Number Generator Function
function nextSequence() {
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