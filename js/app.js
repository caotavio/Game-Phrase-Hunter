// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
//
// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

  // const game = new Game();
  // game.getRandomPhrase().addPhraseToDisplay();

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
