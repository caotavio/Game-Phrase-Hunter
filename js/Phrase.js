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

  showMatchedLetter(selectedLetter) {
    $('#phrase ul li').each(function() {
      if ($(this).text() === selectedLetter) {
        $(this).removeClass();
        $(this).addClass('show');
      }
    });
  }
}
