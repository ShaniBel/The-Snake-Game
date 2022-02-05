# The Snake Game

> This project is the famous snake game. built in vanilla Java Script and uses CSS grid.

#### Initial position:

![screenshot](https://github.com/ShaniBel/The-Snake-Game/blob/main/images/initial-position.png)

#### Long snake:

![screenshot](https://github.com/ShaniBel/The-Snake-Game/blob/main/images/long-snake.png)

#### Lose game message:

![screenshot](https://github.com/ShaniBel/The-Snake-Game/blob/main/images/when-lose.png)

## How to run the game:

1. Clone the project.

`git clone {project_url}`

2. Open with live server.

## Game Rules

1. Snake moves with keypress.

2. First move - the snake will move any direction you choose.

3. Snake moves after first move -

   - will not move up if first move was down.
   - will not move down if first move was up.
   - will not move left if first move was right.
   - will not move right if first move was left.

4. Lose game:

   - if hit the sides of the board ("the walls").
   - if snake head hits it's body.

5. Snake grows every time it "eats" food.
