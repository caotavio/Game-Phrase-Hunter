class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

// Adds a new list item for each letter of the active phrase.
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

/*Checks if the letter selected by the user is present on the active phrase and
returns a boolean */
  checkLetter(selectedLetter) {
    let isLetter = false;
    $('#phrase ul li').each((index, value) => {
      let $value = $(value).text();
      if(selectedLetter === $value) {
        isLetter = true;
      }
    });
    return isLetter;
  }

/* Shows the matched letter on the display if the user chooses one the the letters
in the active phrase */
  showMatchedLetter(selectedLetter) {
    $('#phrase ul li').each(function() {
      if ($(this).text() === selectedLetter) {
        $(this).removeClass();
        $(this).addClass('show');
      }
    });
  }
}
