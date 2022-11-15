import { getBook } from '../fetch-utils.js';
import { renderBookReport } from '../render-utils.js';

const bookReportContainer = document.querySelector('#book-report-container');

window.addEventListener('load', async () => {
    const book = await getBook(1);

    const bookReportEl = renderBookReport(book);

    bookReportContainer.append(bookReportEl);
});
