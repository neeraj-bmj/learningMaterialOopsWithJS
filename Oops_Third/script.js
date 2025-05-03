class Library {
    constructor(){
        this.books = [];
    }
    addBooks(books ){
        this.books.push(...books);
    }
    listAllBooks(){
        this.books.forEach(function(books, idx){
            console.log(`${idx +1}) ${books.name} written by ${books.author}`);
        });
    }
}

class Book{
    constructor(name, author, price){
        this.name =name;
        this.author = author;
        this.price = price;
        this.readStatus = false;
    }
    getInfoOfBook(){
        console.log(`${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it" :  "not read this book"} . It is available  on amazon at the price of Rs. ${this.price}`);
    }
    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}



// note : create new libraey here...

let gorakhpur = new Library();
let delhi = new Library();

// note : create new book here...

let book1 = new Book("harry potter", "jk rowling", 500);
let book2 = new Book("something magic magic" , "Neeraj Gupta", 1000);
let book3 = new Book("something went wrong" , "Dev Sharma", 100);

// note : add new book in the library here...

gorakhpur.addBooks([book1, book2, book3]);

delhi.addBooks([book1, book2, book3]);

// note : remove books here...

// note : list all books here...

gorakhpur.listAllBooks();
delhi.listAllBooks();