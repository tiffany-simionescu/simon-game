# Simon Game

Created using HTML, CSS, and JavaScript

The user presses any key to begin the game, which is tracked by a boolean. 

The program generates a random number from 0 to 3. That number is then compared to the placement index of a list of colors in an array. That index value is then added to the sequence of a seperate array to keep track of the program generated pattern. 

After viewing and hearing the program generated pattern, the user can either click the four buttons, or press keys Q, W, A, or S to select the correct color pattern. If the user selects a key that isn't Q, W, A, or S, the user will be asked to select one of the appropriate keys. The user's chosen color is then added to a user generated pattern array, which is then compared to the program generated pattern array. 

If the patterns of the program and user arrays match, the level increases and the game continues. 

If the user selects a color that does not match the program generated pattern sequence, the user will be alerted, and the game will restart. The level will return to 0, the program generated pattern and the user selections will return to empty arrays.