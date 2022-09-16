// Array of Colors
var buttonColors = ["red", "blue", "green", "yellow"];

// Array of the Current Game Pattern
var gamePattern = [];
// Array of User Clicked Patter
var userClickedPattern = [];

// Detect if any buttons have been clicked
$("div.btn").on("click", function(e) {
    // User's chosen color
    var userChosenColor = e.target.id;
    // Add user's chosen color to the userClickedPattern array
    userClickedPattern.push(userChosenColor);
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

    // Color MP3 to play
    var audio = new Audio(`/sounds/${randomChosenColor}.mp3`);
    audio.play();
}