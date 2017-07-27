document.addEventListener('DOMContentLoaded', function() {
  var answer, guesses;
  var form = document.querySelector('form');
  var input = document.querySelector('#guess');
  var paragraph = document.querySelector('p');
  var link = document.querySelector('a');
  var button = document.querySelector('fieldset').lastElementChild;

  function newGame() {
    answer = Math.floor((Math.random() * 100) + 1);
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    input.value = '';
    enableGuess();
  }

  function invalidNum(input) {
    return !input.match(/^[0-9]+$/);
  }

  function disableGuess() {
    button.setAttribute('disabled', true);
    button.style.background = '#ffcccc';
    button.style.border = '#ffcccc';
    button.style.color = '#e6e6e6';
    button.style.boxShadow = 'none';
  }

  function enableGuess() {
    button.removeAttribute('disabled');
    button.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%)';
    button.style.color = '#fff';
    button.style.boxShadow = '0 0 1px 1px #780e24';
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var guess = invalidNum(input.value) ? false : parseInt(input.value, 10);
    var message;

    guesses++;

    if (!guess) {
      message = 'Invalid input.'
    } else if (guess === answer) {
      disableGuess();
      message = 'You guessed it! It took you ' + guesses + ' guesses.';
    } else if (guess > answer) {
      message = 'My number is lower than ' + String(guess);
    } else {
      message = 'My number is higher than ' + String(guess);
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', function(event) {
    answer = Math.floor((Math.random() * 100) + 1);
    newGame();
  });

  newGame();
});