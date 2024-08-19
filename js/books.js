// Stores book objects
let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.updateRead = function() {
    this.read = !this.read;
}

let dialog = document.querySelector("dialog");
dialog.addEventListener("close", () => {
    if (dialog.returnValue === "default") {
        AddBookToLibrary();
        displayBooks();
    }
});

function AddBookToLibrary() {
    // add a book to the library
    let new_book = new Book(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector("#read").checked,
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
        for (let j = 0; j < 2; j++) {
            let elem = document.createElement("p");
            elem.classList.add(Object.keys(library[i])[j]);
            elem.textContent = Object.values(library[i])[j];

            div.appendChild(elem);
        }

        // Add a 'remove' button for each book element
        let rm = document.createElement("button");
        rm.textContent = "Remove";
        rm.classList.add("remove");
        rm.dataset.index = i;
        rm.addEventListener("click", (e) => {
            library.splice(e.target.dataset.index, 1);
            displayBooks();
        });
        div.appendChild(rm);
        
        // Add a button to update 'read' status
        let readBtn = document.createElement("button");
        readBtn.textContent = library[i].read === true ? "Read": "Not read";
        readBtn.dataset.index = i;
        readBtn.classList.add("read")
        readBtn.addEventListener("click", (e) => {
            library[i].updateRead();
            e.target.textContent = library[i].read === true ? "Read": "Not read";
                    
            displayBooks();
        });
        div.appendChild(readBtn);

        document.querySelector(".books").append(div);
    }
}
