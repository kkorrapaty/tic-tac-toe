# **TIC TAC TOE**
*Tic Tac Toe gameplay application*

## PLANNING

The creation of this application was an incredible experience, in which I went through many difficulties. I pushed forward, and through the help of my peers and instructors, I successfuly created the gameplay I am proud to display.

### USER STORIES
1. As a user, I want to sign-up/sign-in, so I can save my games and data
2. As a player, I want to create a new game after I've signed in so I can continue playing new games
3. As a player, I want to see all games, finished and unfinished, and I should not be able to play an unfinished game any more
4. As a player, I want to see how many total games I have won and lost

### WIREFRAME
![WireFrame]
(public/WireFrameProject1.pdf)

### TECHNOLOGIES
* JavaScript
* HTML/CSS/Bootstrap
* Node.js

### Process

The process for this application began with understanding and working with APIs. I created buttons for:

* Sign up
* Sign in
* Sign out
* Change password

and tested them in the terminal using `curl` and in the application using `grunt serve`. After that I created the gameboard using `Bootstrap` and added click handlers. I struggled with ending the game right after the player's last click, but pushed that feature for later because I had other necessities to deal with; I solved it at the end after everything was coded and implemented properly.

I then created the buttons for:

* create new game
* show all games
* get finished games
* get unfinished games
* get certain game
* delete certain game

using APIs again. I needed to keep track of the player, so I created a global variable `count`, and based on if it was even or odd it would be player X or O, respectively. I made sure no space could be stolen from another player, and the proper winner (or tie) is displayed after the game is over.
I added some CSS styling in the midst of the JavaScript writing.

#### Unresolved
* Allow old games to be played
* I will add some more CSS styling to beautify the site
* Show finished/unfinished/all games with a better look
