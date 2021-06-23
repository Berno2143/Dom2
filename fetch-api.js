


let button = document.querySelector('#button');
button.addEventListener('click', () => {
    let apifetch = fetch( 'https://api.thecatapi.com/v1/images/search');
    apifetch
        .then(resp => resp.json())
        .then(data => {
            let cat = document.querySelector('#cat');
            cat.src = data[0].url;
            console.log(data[0].url);

    }).catch(e => console.log(e));
})

