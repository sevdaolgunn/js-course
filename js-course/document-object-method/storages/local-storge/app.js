//local storge

// setItem

localStorage.setItem("renk", "yellow");
localStorage.setItem("renk-kodu ", 238 ); // string olarak kaydeder

// get Item

const value = localStorage.getItem("renk");

console.log(value);
console.log(typeof value);


//clear local storge 

//localStorage.clear();

//console.log(localStorage.getItem("sport")); // null 

if(localStorage.getItem("sport") === null){
    console.log("veri bulunmuyor")
}

else {
    console.log("veri bulunuyor.");
}

// local storge array yazma 

const colors = ["Yellow", "Red", "Blue"];

// localStorage.setItem("colors", colors); // type of -> string 

localStorage.setItem("colors", JSON.stringify(colors)); // typeof -> array

//console.log(localStorage.getItem("colors")); //srting gibi yazar

const deger = JSON.parse(localStorage.getItem("colors")); // ---> array olarak yazar

console.log(deger);



const form = document.getElementById("book-form");
const bookInput = document.getElementById("addkey");

form.addEventListener("submit", addBook);

function addBook(e){

    const value = bookInput.value;

    let books;

    if(localStorage.getItem("books") === null){
        books = [];
    }

    else {
        books = JSON.parse(localStorage.getItem("books"));
    }

    books.push(value);

    localStorage.setItem("books", JSON.stringify(books));


    e.preventDefault();
}

const bookList = JSON.parse(localStorage.getItem("books"));
console.log(bookList);



