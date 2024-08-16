// Stores book objects
let library = [];

// Dummy books for testing
for (let i = 0; i < 2; i++) {
    let book = new Book(`Title ${i}`, `Author ${i}`, `${i}00 pages`, "read");
    library.push(book);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let dialog = document.querySelector("dialog");
dialog.addEventListener("close", () => {
    AddBookToLibrary();
    displayBooks();
});

function AddBookToLibrary() {
    // add a book to the library
    let new_book = new Book(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector("#read").value,
    );
    library.push(new_book);
}

document.querySelector("#add-btn").addEventListener("click", () => {
    dialog.showModal();
    
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
    for (let i = 0; i < library.length; i++) {
        let div = document.createElement("div");
        div.classList.add("book");

        // Create elements for each book property
        // and add to book element to be displayed.
        for (const value of Object.values(library[i])) {
            let elem = document.createElement("p");
            elem.textContent = value;

            div.appendChild(elem);
        }

        document.querySelector(".books").append(div);
    }
}
