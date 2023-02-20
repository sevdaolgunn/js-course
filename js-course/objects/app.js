let value;

const programmer = { 
    fullName: "Sevdanur OLGUN",
    age: 20,
    email: "sevdaolgun@gmail.com",
    langs:["C", "Java", "JS"],

    address : {
        city : "Sinop",
        street : "Erfelek"
    },

    work : function () {
        console.log("Çalışıyor..");
        
    }
}

value = programmer;

value = programmer.email; // value = programmer["email"];

programmer.work();

const programmers = [
    {fullName: "Sevdanur OLGUN", age:20},
    {fullName: "Kadir TABAN", age:22},

];


value = programmers[0];
value = programmers;



console.log(value);



//Zaman Objesi//

let val;

const now = new Date();//şuanki zaman

//console.log(now);

const date1 = new Date("6-10-2002 06:12:23");
const date2 = new Date("June 10 2002");


val = date1.getMonth();

date1.setMonth(7);

val = date1;


console.log(val);