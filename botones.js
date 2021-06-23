const animales = [`Zorro`, `Perro`, `Tortuga`, `Pez`, `Ballena`, `Gato`, `Raton`, `Huron`, `Guacamaya`, `Mapache`];
const computadoras = [`HP`, `Compaq`, `DELL`, `Asus`, `Lenovo`, `Apple`, `Toshiba`, `Samsung`, `Sony`, `Lg`];
const compañeros = [`Ana`, `Sharon`, `Humberto`, `Alex`, `Luz`,`Bernardino`, `Rogelio`, `Alberto`, `Emanuel`, `Tamara`];

const list = document.querySelector("#lista");


let lAnimales=document.querySelector('#animales');
lAnimales.addEventListener('click', event=>{
    list.textContent = "";
    animales.forEach(function(animal){
    let item= document.createElement('li');
    item.textContent=`${animal}`;
    list.appendChild(item);
});
}) 

let lcomputadoras=document.querySelector('#computadoras');
lcomputadoras.addEventListener('click', event=>{
    list.textContent = "";
    computadoras.forEach(function(compus){
    let item= document.createElement('li');
    item.textContent=`${compus}`;
    list.appendChild(item);
});
}) 


let lcompañeros=document.querySelector('#compañeros');
lcompañeros.addEventListener('click', event=>{
    list.textContent = "";
    compañeros.forEach(function(compas){
    let item= document.createElement('li');
    item.textContent=`${compas}`;
    list.appendChild(item);
});
}) 
