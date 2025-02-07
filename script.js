let params = new URLSearchParams(window.location.search);
let type = params.get('id');

fetch(`/data/destinations.json`)
.then(response => response.json()).then(function(data) {
    let sectionElm = document.querySelector("section");
    let listElm = document.createElement("ul");
    listElm.classList.add("details");

    listElm.innerHTML = `
       ${data.destinations.map(destinations => 
        `<li>
           <p>${destinations.id}</p>
           <img src="img/${destinations.image}"> 
           <p>${destinations.destination}</p>
           <h2>${destinations.title}</h2>
           <p>${destinations.subtitle}</p>
           <p>${destinations.text}</p>
        </li>`).join("")}
    `;
    
    sectionElm.appendChild(listElm);
});
