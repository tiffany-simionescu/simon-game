# Simon Game

Created using HTML, CSS, and JavaScript

The user presses any key to begin the game, which is tracked by a boolean. 

The program generates a random number from 0 to 3. That number is then compared to the placement index of a list of colors in an array. That index value is then added to the sequence of a seperate array to keep track of the program generated pattern. 

The user can either click on one of the four buttons, or press keys Q, W, A, or S to select a color. If the user selects a different key, the user will be asked to select one of the appropriate keys. That color is then added to an array, which is then compared to the program generated pattern. 

If the patterns of the program and user arrays match, the level increases and the game continues. 

If the user selects a color that does not match the program generated pattern sequence, the user will be alerted, and the game will restart. The level will return to 0, the program generated pattern and the user selections will return to empty arrays.