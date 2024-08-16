// Stores book objects
let library = [];

for (let i = 0; i < 5; i++) {
    let book = new Book(`Title ${i}`, `Author ${i}`, `${i}00 pages`, "read");
    library.push(book);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function AddBookToLibrary() {
    // add a book to the library
}

document.querySelector("#add-btn").addEventListener("click", () => {
    AddBookToLibrary();

    // Update the UI
    displayBooks();
});

// Updates the display by rendering all `book`
// objects in the `library` array
function displayBooks() {
    // Remove existing books on display, to update later.
    document.querySelector("main").removeChild(document.querySelector(".books"));
    let books_container = document.createElement("div");
    books_container.classList.add("books");
    document.querySelector("main").appendChild(books_container);

    // Create DOM elements for each book and display it.
    for (let book of library) {
        let div = document.createElement("div");
        div.classList.add("book");

        // Create elements for each book property
        // and add to book element to be displayed.
        for (const value of Object.values(book)) {
            let elem = document.createElement("p");
            elem.textContent = value;

            div.appendChild(elem);
        }

        document.querySelector(".books").append(div);
    }
}
