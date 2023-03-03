const title = document.getElementById("title");

// title.onfocus = function(){
//     console.log("kitap");
//}

// title.addEventListener("focus", function(event){
//     //console.log("kitap");
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// })

const addBtn = document.getElementById("add-button");

addBtn.addEventListener("submit", submitForm);

function submitForm(event){
    
    console.log("submit event");

   event.preventDefault();
}


//Klavye Eventleri

// keypress -- sadece sayı ve harfler

document.addEventListener("keypress", run);

function run(e){
    console.log("naber")
    console.log(e.which);
    console.log(e.key);
}


//keydown
document.addEventListener("keydown", run);

function run(e){
    console.log("naber")
    console.log(e.which);
    console.log(e.key);
}


//keyup

//keydown
document.addEventListener("keyup", run);

function run(e){
    console.log("naber")
    console.log(e.which);
    console.log(e.key);
}


// Input events

document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("sayfa yüklendi");
}

const filter = document.getElementById("title");

//focus and blur

filter.addEventListener("focus",run);
filter.addEventListener("blur", run);

//paste  and copy

filter.addEventListener("paste", run);

filter.addEventListener("copy", run);

function run(e){
    console.log(e.type);
}



