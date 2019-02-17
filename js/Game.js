class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

// Returns an array of new phrases passed as arguments for the Phrase class.
  createPhrases() {
    const array = [new Phrase('may the force be with you'),
                   new Phrase('free your mind neo'),
                   new Phrase('show me the money'),
                   new Phrase('houston we have a problem'),
                   new Phrase('elementary my dear watson'),
                   new Phrase('there is no try'),
                   new Phrase('say hello to my little friend')
                  ];
    return array;
  }

// Randomly chooses a phrase from the array of phrases.
  getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
  }

/* Starts the game by hiding the overlay with the start game button
and showing the game`s main screen.
*/
  startGame() {
    $('#overlay').hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

// Checks if any letter is hidden, if all are shown, returns true.
  checkForWin() {
    let letter = $("#phrase ul li[class*='hide letter']");
    if (letter.length === 0) {
      return true;
    } else {
      return false;
    }
  }

/* "Removes" a heart by changing its image, adds 1 to the "missed" counter
and calls the gameover() and resetGame() methods if the player reaches five
lost lives (missed counter reaches 5).
*/
  removeLife() {
    this.missed += 1;
    let heart = $('#scoreboard ol li img');
    if(this.missed < 5) {
      heart.eq(this.missed - 1).attr('src', 'images/lostHeart.png');
    } else {
      this.gameOver(false);
      this.resetGame();
    }
  }

/* Displays a styled overlay screen with win or lose messages depending on the
outcome of the of the game.
*/
  gameOver(gameWon) {
    $('#overlay').show();
    let message = $('#game-over-message');
    if (gameWon) {
      message.parent().addClass('win');
      message.text('You nailed it!');
    } else {
      message.parent().addClass('lose');
      message.text('Better luck next time!');
    }
  }

/* Handles the interaction with the keyboard buttons disabling then when clicked
and styling them accordingly (right or wrong).
*/
  handleInteraction(button) {
    let selectedButton = button.target;
    let target = selectedButton.textContent;
    let letterClicked = this.activePhrase.checkLetter(target);
    $(selectedButton).attr('disabled', true);
    if (letterClicked === false) {
      $(selectedButton).addClass('wrong');
      this.removeLife();
    } else {
      // everytime a button is marked as rigth the code check if the game is won
      this.activePhrase.showMatchedLetter(target);
      $(selectedButton).addClass('chosen');
      this.checkForWin();
      if(this.checkForWin() === true) {
        this.gameOver(true);
        this.resetGame();
      }
    }
  }

/* Resets the game to it`s original styles and features and also fires the
startGame() method. 
*/
  resetGame() {
    $('#btn__reset').on('click', () => {
      this.missed = 0;
      $('#phrase ul li').remove();
      $('#overlay')
        .removeClass()
        .addClass('start');
      $('.keyrow button')
        .removeClass()
        .addClass('key')
        .attr('disabled', false);
      $('#scoreboard ol li img').attr('src', 'images/liveHeart.png');
      game.startGame();
    });
  }
}
