// script //

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  let title = document.getElementById("book_title");
  let author = document.getElementById("book_author");
  let pages = document.getElementById("book_pages");
  let read = document.getElementById("read_status");
  myLibrary.push(new Book (title.value, author.value, pages.value, read.value));
}

function deleteForm() {
  let title = document.getElementById("book_title");
  let author = document.getElementById("book_author");
  let pages = document.getElementById("book_pages");
  let read = document.getElementById("read_status");
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
}

function displayBook() {
  const table = document.querySelector('table');
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read Status</th></tr>';

  myLibrary.forEach(book => {
    const BookRow = document.createElement('tr');
    BookRow.classList.add('new');
    const rows = ["title", "author", "pages", "read"];
    
    let BookData;

    for (const property in book) {
      if (rows.includes(property)) {
        BookData = document.createElement('td');
        BookData.textContent = book[property];
        BookRow.append(BookData);
      }
    }

    const statusButton = document.createElement('button');
    statusButton.textContent = 'Change Status';
    BookRow.append(statusButton);

    statusButton.addEventListener('click', () => {
      if (BookData.textContent === 'Read') {
        BookData.textContent = 'Unread';
      } else {
        BookData.textContent = 'Read';
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('subtract');
    deleteButton.textContent = 'Delete Book';
    BookRow.append(deleteButton);

    deleteButton.addEventListener('click', () => {
      const index = myLibrary.findIndex(item => item.title === book.title);
      myLibrary.splice(index, 1);
      BookRow.remove();
      displayBook();
    });

    table.append(BookRow);
  });
}


const add = document.querySelector('#add');
add.addEventListener('click', () => {
  addBookToLibrary(), displayBook(), deleteForm()
});


