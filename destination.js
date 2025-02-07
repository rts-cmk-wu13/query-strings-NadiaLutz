let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get('id');

fetch(`/data/${id}.json`)
.then(response => response.json())
.then(data => {

    let body = document.body;
    
    let title = document.createElement("h1");
    title.textContent = data.title;
    body.appendChild(title);
    
    let img = document.createElement("img");
    img.src = `img/${data.image}`;
    img.alt = data.title;
    body.appendChild(img);
    
    let description = document.createElement("p");
    description.textContent = data.text;
    body.appendChild(description);
    
});
