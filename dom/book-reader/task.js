const fontControls = document.querySelectorAll('.font-size');

const book = document.getElementById('book');

fontControls.forEach(control => {
  control.addEventListener('click', function(event) {
    event.preventDefault();

    fontControls.forEach(control => {
      control.classList.remove('font-size_active');
    });

    this.classList.add('font-size_active');

    const fontSize = this.getAttribute('data-size');

    if (fontSize === 'small') {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-big', 'book_fs-small');
    }
  });
});
