// Sample data for books
const books = [
  { title: "The Hobbit", category: "fantasy" },
  { title: "1984", category: "fiction" },
  { title: "Sapiens", category: "nonfiction" },
  { title: "Harry Potter", category: "fantasy" },
  { title: "To Kill a Mockingbird", category: "fiction" },
];

let history = [];

// Display all books initially
window.onload = () => {
  displayBooks(books);
};

// Function to display books
function displayBooks(bookArray) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  
  bookArray.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.category}</p><button onclick="borrowBook(${index})">Borrow</button>`;
    bookList.appendChild(bookDiv);
  });
}

// Search books
document.getElementById("search").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
  displayBooks(filteredBooks);
});

// Filter books by category
function filterBooks(category) {
  if (category === "all") {
    displayBooks(books);
  } else {
    const filteredBooks = books.filter(book => book.category === category);
    displayBooks(filteredBooks);
  }
}

// Borrow a book and add to history
function borrowBook(index) {
  const book = books[index];
  history.push(`Borrowed: ${book.title} - ${new Date().toLocaleString()}`);
  updateHistory();
}

// Update borrowing history display
function updateHistory() {
  const historyList = document.getElementById("history");
  historyList.innerHTML = "";
  history.forEach(entry => {
    const listItem = document.createElement("li");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
  });
}
