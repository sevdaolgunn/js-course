// Creating new element



const newInput = document.createElement("a");

const cardbody = document.getElementById("book-form");

newInput.id = "clear-books";
newInput.href = "https://www.google.com.tr/?hl=tr";
newInput.target = "_blank";

newInput.appendChild(document.createTextNode("farklı sayfaya git"));

cardbody.appendChild(newInput);

//newInput.textContent = "farklı sayfaya git";

// Text NOde 

// const text = document.createTextNode("naber");
// cardbody.appendChild(text);
// console.log(cardbody);


//console.log(newInput);

//Dinamik Elememt Silme


const bookForm = document.querySelector("form#book-form");

const books = document.querySelectorAll("div.input_txt");

                   //remove method

///books[0].remove();

//bookForm.removeChild(bookForm.firstElementChild);

//bookForm.removeChild(books[2]);

console.log(books);
console.log(bookForm);


//REMOVE

const card = document.querySelectorAll(".center")[0];

const newElement = document.createElement("h2");

newElement.className = "card-title";
newElement.id ="tasks-title";
newElement.textContent = "yeni başlık";

// ESki Element 

const oldElement = document.querySelector("#name");


card.replaceChild(newElement,oldElement);

console.log(newElement);



const bookInput = document.getElementById("title");

let element;

element =  bookInput;
element = bookInput.classList;

bookInput.classList.add("newClass");

element = bookInput.getAttribute("class");
bookInput.setAttribute("class", "2name")

element = bookInput.classList;

element = bookInput.hasAttribute("id");

bookInput.removeAttribute("class");
element = bookInput;
console.log(element);

 