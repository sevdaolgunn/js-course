const elements = document.all;

for(let i = 0; i < elements.length; i++){
    //console.log(elements[i]);
}

const collections = Array.from(document.all);

collections.forEach(function(collections){
   // console.log(collections);
}) //forEach metoduyla html collection üzerinde gezinmek için diziye dönüştürmemiz gerekiyor!!!

let value;

value = document.all;
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;

//Scripts

value = document.scripts;
value = document.scripts.length;

//Links

value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];
//value = document.links[document.links.length-1].getAttribute("href");
//value = document.links[document.links.length-1].className;

//console.log(value);

//  Element Seçme

let element;

element = document.getElementById("book-form"); //id

element = document.getElementsByClassName("input_txt"); // class name 

element = document.getElementsByTagName("div"); // tag


/////// QUERY SELECTOR -- CSS SELECTOR 
// ilk bulduğu elementi seçer--tek bir element döner


element = document.querySelector("#book-form"); //id

element = document.querySelector("div"); //tag

element = document.querySelector(".center"); //class


///////////////////////////////////////

element = document.querySelectorAll(".input_txt"); //node list -- tüm elementleri seçer.

///////////////////////////////////////

element = document.querySelector(".add-button");

console.log(element.value);

console.log(element.innerHTML);

//console.log(element);


////DOM Elementleri Üzerinde Gezinme

const bookform = document.querySelector("#book-form");

const input = document.querySelector(".input_txt:nth-child(2)");

const center = document.querySelector(".center");

value = bookform;
value = input;
value = center;


// Child Nodes Method

value = bookform.childNodes; //satır atlamalını da sayar - text
value = bookform.childNodes[0];

//Children - Element

value = bookform.children;
value = bookform.children[1].textContent = "değiştir";

value = center.children[2].children[0].textContent = "değiştir";



console.log(value);




