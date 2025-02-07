


document.addEventListener("DOMContentLoaded", function() {
    fetch(`/data/destinations.json`)
    .then(response => response.json())
    .then(function(data) {
        
        let sectionElm = document.querySelector("section");
        
        let sectionHeadline = document.createElement("h1");
        sectionHeadline.textContent = "Apartments for Rent";
        sectionElm.appendChild(sectionHeadline);


        let listElm = document.createElement("ul");
        listElm.classList.add("ul");

        listElm.innerHTML = `
           ${data.destinations.map(destinations => `
               <li>
                   <img src="img/${destinations.image}" alt="${destinations.title}"> 
                   <div class="button__container">
                       <img src="img/heart.png" class="heart-icon" alt="Heart Icon">
                       <button class="more-button" onclick="location.href='destination.html?id=${destinations.id}'">MORE</button>
                   </div>
               </li>`).join("")}
        `;
        
        sectionElm.append(listElm);
    });

});
