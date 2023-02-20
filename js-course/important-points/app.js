//TEMPLATE LITERALS//


const name = "Sevdanur OLGUN";
const department = "Bilişim";
const salary =1000;

 //const calisan = "İsim:" + name + "\n" + "Departman:" + department + "\n" + "Maaş:" + salary;

 const calisan = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;

 console.log(calisan);

 // const html = "<ul>" +
 //             "<li>" + name + "</li>"+
 //            "<li>" + department + "</li>" +
 //             "<li>" + salary +"</li>"
 //             "</ul";

 const html = `
       <ul>
       <li>${name}</li>
       <li>${department}</li>
       <li>${salary}</li>
       </ul>
 `;

//document.body.innerHTML = html;    


// sıralama 


let numbers = new Array(12,34,21,53,1,32);

value = numbers;

value = numbers.sort();// sadece ilk basamaklara bakarak küçükten büyüğe sıralar.

value = numbers.sort(function(x,y){ //küçükten büyüğe
    return x-y;
})

console.log(value);
