// se hace referencia al elemento dentro del html
//para seleccionar una clase se utiliza .
// para seleccionar un id usamos #
let subtitle = document.querySelector("#subtitle");
let parrafo = document.querySelector("#parrafo");

console.log(subtitle);

// con texcontent podemos acceder al valor del elemento de html
// tambien podemos cambiar el valor asignado al nuevo valor 
console.log(subtitle.textContent);
subtitle.textContent = "Nuevo valor";

// classlist.add ("mi clase") lo utilizamos para agregar clases al elemento
subtitle.classList.add("red");

subtitle.classList.remove("red");

/* subtitle.textContent = "subtitulo"; */

// se crea un arreglo con animales 
const animales = ["Perro", "Gato", "Mapache", "Pez", "Leopardo", "Raton", "Zorro"];
const list = document.querySelector("#list");

// push(elemento) sirve para agregar un elemento al final de un arreglo
animales.push("Elefante");


// foreach es un ciclo para recorrer todos los 
// elemento de un arreglo u objeto, tiene una funcion anonima de callback
animales.forEach(function(animal, index) {
    let item = document.createElement("li");
    item.textContent = `${index + 1} ${animal}`;
    // <li>Perros</li>
    list.appendChild(item);
} );


// foreach es un ciclo para recorrer todos los 
// elemento de un arreglo u objeto, tiene una funcion anonima de callback
// usamos una funcion de flecha en este caso
animales.forEach (animal => {
    let item = document.createElement("li");
    item.textContent = `${index + 1} ${animal}`;
    // <li>Perros</li>
    list.appendChild(item);
} );
