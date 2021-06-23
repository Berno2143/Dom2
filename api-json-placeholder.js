let btnusers = document.querySelector("#btnusers");
let divusers = document.querySelector("#divusers");

btnusers.addEventListener("click", displayData);

/* btnusers.addEventListener("click", () => {
    let getusers = fetch("https://jsonplaceholder.typicode.com/users")

    getusers
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                let parr = document.createElement("p");
                parr.textContent = user.name;
                divusers.appendChild(parr);
            });
        }).catch(e => console.log(e));

}) */

async function displayData() {
    let getusers = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(getusers.ok);

    let data = await getusers.json();
    data.forEach(user => {
        let parr = document.createElement("p");
        parr.textContent = `Nombre de Usuario: ${user.name} , Email: ${user.email} , Ciudad: ${user.address.city} `;
        divusers.appendChild(parr);
    });
    console.log(data);

}

/* displayData(); */