import { getBook } from '../fetch-utils.js';
import { renderBookReport } from '../render-utils.js';

const bookReportContainer = document.querySelector('#book-report-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    const book = await getBook(id);

    const bookReportEl = renderBookReport(book);

    bookReportContainer.append(bookReportEl);
});
