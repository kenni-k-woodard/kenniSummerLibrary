### HTML

-   on home page
    -   div to hold items
    -   render full list from supabase
-   on detail page
    -   section and div container for details
    -   link back to home page (in header)

### NO STATE!

### EVENTS

-   home page load
    -   fetch all items
    -   display said items (loop, render, append)
-   display page load
    -   fetch single item (using the id)
    -   display, baby!

### FUNCTIONS

-   fetch-utils.js
    -   getBook, getBookByID
-   render-utils.js
    -   renderBookCard, renderBookDetail

### SLICES/workflow

1. all items render on homepage
2. cards click and redirect
3. get detail page to render
4.
