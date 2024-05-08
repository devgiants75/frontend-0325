// 도서관 관리 시스템
// 이 시스템은 다음과 같은 기능을 제공합니다:

// 책 추가: 새 책을 도서 목록에 추가합니다.
// 책 대여: 사용자가 책을 대여할 수 있도록 합니다. 대여 상태를 관리합니다.
// 책 반납: 대여한 책을 반납 처리합니다.
// 책 조회: 현재 도서관에 있는 책의 목록을 조회합니다.

//? Book 클래스: 각 책의 정보(id, title, author)를 저장하며, 대여 및 반납 기능(rent, returnBook)을 제공합니다.
// Library 클래스: Book 인스턴스의 목록을 관리합니다. 책을 추가하는 addBook, 목록을 출력하는 displayBooks, 책을 대여하고 반납하는 rentBook, returnBook 기능을 제공합니다.
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true; // 책의 대여 가능 상태
  }

  rent() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been rented.`);
    } else {
      console.log(`${this.title} is currently not available.`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned.`);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const newBook = new Book(this.books.length + 1, title, author);
    this.books.push(newBook);
    console.log(`${title} by ${author} has been added to the library.`);
  }

  displayBooks() {
    console.log("Library Catalogue:");
    this.books.forEach((book) => {
      console.log(
        `${book.id}: ${book.title} by ${book.author} - ${
          book.isAvailable ? "Available" : "Rented"
        }`
      );
    });
  }

  rentBook(id) {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      book.rent();
    } else {
      console.log("Book not found.");
    }
  }

  returnBook(id) {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      book.returnBook();
    } else {
      console.log("Book not found.");
    }
  }
}

// 예제 사용
const myLibrary = new Library();
myLibrary.addBook("1984", "George Orwell");
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien");
myLibrary.displayBooks();
myLibrary.rentBook(1);
myLibrary.returnBook(1);
myLibrary.displayBooks();
