export function renderBook(book) {
    const bookEl = document.createElement('a');

    const titleEl = document.createElement('p');
    titleEl.textContent = book.title;
    titleEl.classList.add('book-title');

    bookEl.append(titleEl);
    return bookEl;
}
