const makeMagicText = () => {
  let wrapper = document.querySelector('.magic-wrapper');
  let text = document.querySelector('.magic-text');
  let content = text.textContent;

  text.style.display = 'none';

  for (let index = 0; index < content.length; index++) {
    (function (indexOfContentLetter) {
      setTimeout(function () {
        // Created textNode to append
        let letter = document.createTextNode(content[indexOfContentLetter]);
        let span = document.createElement('span');
        span.appendChild(letter);

        span.classList.add('magic-wave');
        wrapper.appendChild(span);
      }, 50 * indexOfContentLetter);
    })(index);
  }
};
