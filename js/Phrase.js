class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let arr = [...this.phrase];
    arr.forEach(letter => {
      let li = $(`<li>${letter}</li>`);
      if(letter !== ' ') {
        li.addClass(`hide letter ${letter}`);
        $('#phrase ul').append(li);
      } else {
        let li = $(`<li>${letter}</li>`);
        li.addClass('hide space');
        $('#phrase ul').append(li);
      }
      return letter;
    });
  }

  checkLetter() {
    // checks to see if the letter selected by the player matches a letter in the phrase
  }

  showMatchedLetter() {
    /*
    - Reveals the letter(s) on the board that matches the player's selection.
    To reveal the matching letter(s), select all of the letter DOM elements that
     have a CSS class name that matches the selected letter and replace each
     selected element's hide CSS class with the show CSS class.
    */
  }
}
