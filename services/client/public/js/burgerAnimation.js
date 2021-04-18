document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__burger').addEventListener('click', function (event) {
    event.preventDefault();

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      document.querySelector('.header__navbar').classList.remove('active');
    } else {
      this.classList.add('active');
      document.querySelector('.header__navbar').classList.add('active');
    }
  });
});
