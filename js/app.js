let game;
game = new Game();

// Starts a new game when clicked.
$('#btn__reset').on('click', () => {
  game.startGame();
});

/*
This is the same as ---$('.key').on('click', (e)--- but using event delegation
makes it dinamyc, assuring that the event will fire even if other buttons ow keys
are added with JS.
Also
*/
$('.keyrow').on('click', '.key', (e) => {
  game.handleInteraction(e);
});
