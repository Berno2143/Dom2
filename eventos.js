// el evento se dispara cuando el documento esta cargando
window.onload = function () {

}

let nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("keydown", function (event) {
    console.log(nameInput.value);
    /* console.log(event.target.value); */
} );

let button = document.querySelector("#button");
button.addEventListener("click", event => {
    let nameHeader = document.querySelector("#nameH");
    nameHeader.textContent = nameInput.value;    
});


/* function cambiarNombre () {
    let nameHeader = document.querySelector("#nameH");
    nameHeader.textContent = nameInput.value;   
}
 */
