const listanimals = [`Pez`, `Jaguar`, `Lobo`, `Iguana`, `Perro`, `Tortuga`, `Pez`, `Ballena`, `Gato`, `Raton`, `Huron`, `Guacamaya`, `Mapache`];
const listcomputers = [`HP`, `Compaq`, `DELL`, `Asus`, `Lenovo`, `Apple`, `Toshiba`, `Samsung`, `Sony`, `Lg`];
const listpeople = [`Carlos Eduardo`, `Edgar Rodrigo`, `Pedro Angel`, `Cesar Eduardo`, `Luis`, `Clara Itzel`, 
                    `Tania Belen`, `Felipe de Jesus`, `Sharon`, `Astrik San`, `Gustavo Israel`, `Jaquelin`, `Humberto`];

const btnanimals = document.querySelector("#animals");
const btncomputers = document.querySelector("#computers");
const btnpeople = document.querySelector("#people");
const list = document.querySelector("#list");

function displayList(lists){
    lists.forEach( l => {
        const item = document.createElement("li")
        item.textContent = l;
        list.appendChild(item);
    })
}

btnanimals.addEventListener("click", () =>{
    list.textContent = "";
    displayList(listanimals);
});
    
btncomputers.addEventListener("click", () =>{
    list.textContent = "";
    displayList(listcomputers);
});

btnpeople.addEventListener("click", () =>{
    list.textContent = "";
    displayList(listpeople);
});
/* btnanimals.addEventListener("click", function(){
    listanimals.forEach(animal =>{
        const li = document.createElement("li");
        li.textContent = animal;
        list.appendChild(li);
    })
}); */

/* btncomputers.addEventListener("click", function(){
    listcomputers.forEach(computer =>{
        const li = document.createElement("li");
        li.textContent = computer;
        list.appendChild(li);
    })
});

btnpeople.addEventListener("click", function(){
    listpeople.forEach(person =>{
        const li = document.createElement("li");
        li.textContent = person;
        list.appendChild(li);
    })
}); */