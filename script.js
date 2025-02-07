document.addEventListener("DOMContentLoaded", function() {
    fetch(`/data/destinations.json`)
    .then(response => response.json())
    .then(function(data) {
        let sectionElm = document.querySelector("section");
        let listElm = document.createElement("ul");
        listElm.classList.add("details");

        listElm.innerHTML = `
           ${data.destinations.map(destinations => `
               <li>
                   <a href="destination.html?id=${destinations.id}">${destinations.destination}</a>
                   <img src="img/${destinations.image}" alt="${destinations.title}"> 
                   <button class="more-button" onclick="location.href='destination.html?id=${destinations.id}'">More</button>
               </li>`).join("")}
        `;
        
        sectionElm.appendChild(listElm);
    });
});
