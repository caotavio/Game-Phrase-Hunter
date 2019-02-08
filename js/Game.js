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
    this.activePhrase = new Phrase(this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }
}
