class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

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

  getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
  }

  startGame() {
    $('#overlay').hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  checkForWin() {
    let letter = $("#phrase ul li[class*='hide letter']");
    if (letter.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    this.missed += 1;
    let heart = $('#scoreboard ol li img');
    if(this.missed < 5) {
      heart.eq(this.missed - 1).attr('src', 'images/lostHeart.png');
    } else {
      this.gameOver();
    }
  }

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

  handleInteraction(button) {
    let target = button.target;
    let letterClicked = this.activePhrase.checkLetter(target);
    $(target).attr('disabled', true);
    if (letterClicked === false) {
      this.removeLife();
    } else {
      this.activePhrase.showMatchedLetter(target);
    }
  }
}
