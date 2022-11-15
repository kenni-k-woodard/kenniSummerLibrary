export function renderBook(book) {
    const bookEl = document.createElement('a');
    bookEl.href = `./bookReport/?id = ${book.id}`;

    const titleEl = document.createElement('p');
    titleEl.textContent = book.title;
    titleEl.classList.add('book-title');

    bookEl.append(titleEl);
    return bookEl;
}

export function renderBookReport(bookObject) {
    const div = document.createElement('div');
    const titleEl = document.createElement('p');
    const authorEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const pageEl = document.createElement('p');
    const starsEl = document.createElement('p');

    titleEl.textContent = bookObject.title;
    authorEl.textContent = bookObject.author;
    yearEl.textContent = bookObject.year;
    genreEl.textContent = bookObject.genre;
    pageEl.textContent = bookObject.pages;
    starsEl.textContent = bookObject.rating;

    div.append(titleEl, authorEl, yearEl, genreEl, pageEl, starsEl);
    return div;
}
