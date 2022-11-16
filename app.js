/* Imports */
import { getAllBooks } from './fetch-utils.js';
import { renderBook } from './render-utils.js';

/* Get DOM Elements */
const bookshelf = document.querySelector('#bookshelf');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const kenniSummerLibrary = await getAllBooks();

    for (let book of kenniSummerLibrary) {
        const bookEl = renderBook(book);
        bookshelf.append(bookEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
