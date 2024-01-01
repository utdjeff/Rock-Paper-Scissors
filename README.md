# Rock-Paper-Scissors Game

This project is a simple implementation of the classic game Rock-Paper-Scissors. It's built using HTML and JavaScript and can be played in any modern web browser.

## How to Play

- The game consists of three buttons: Rock, Paper, and Scissors.
- Click on one of these buttons to make your choice.
- The computer will randomly select its choice.
- The game will then determine the winner based on the rules of Rock-Paper-Scissors on a game of 5.

## Rules

- Rock beats Scissors.
- Scissors beat Paper.
- Paper beats Rock.
- If both the player and computer choose the same, it's a draw.

## Implementation

### HTML

The HTML structure includes three buttons for the choices and a paragraph to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors Game</title>
</head>
<body>
    <h1>Rock Paper Scissors Game</h1>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <p id="result"></p>
</body>
</html>
