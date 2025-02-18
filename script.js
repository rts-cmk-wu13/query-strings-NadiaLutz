document.addEventListener("DOMContentLoaded", function() {
    function fetchDestinations() {
        fetch("/data/destinations.json")
            .then(response => response.json())
            .then(data => {
                let sectionElm = document.querySelector(".details");
                sectionElm.innerHTML = `<h1>Apartments for Rent</h1>`;
               
                let listElm = document.createElement("ul");
                listElm.classList.add("ul");

                data.destinations.forEach(destination => {
                    console.log("Destination ID:", destination.id); 
                    let isFavorite = favorites.includes(destination.id);
                    let listItem = document.createElement("li");
                    listItem.innerHTML = `
                        <div class="button__container">
                            <button class="more-button" onclick="location.href='destination.html?id=${destination.id}'">MORE</button>
                            <button class="heart" data-id="${destination.id}">
                                <i class="bi bi-bookmark-heart ${isFavorite ? 'favorite' : ''}"></i>
                            </button>
                        </div>
                    `;
                    listElm.appendChild(listItem);
                });

                sectionElm.appendChild(listElm);
            })
            .catch(error => console.error("Error fetching destinations:", error));
    }

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
     
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
     
    fetch("/data/destinations.json")
        .then(response => response.json())
        .then(data => {
            let destiSection = document.querySelector(".destination__list");
            if (destiSection) {
                destiSection.classList.add("destination__list--details");
                destiSection.innerHTML = `<h1>Apartments for rent</h1>`;
               
                let divElm = document.createElement("div");
                divElm.classList.add("destination__details");
     
                data.destinations.forEach(destination => {
                    if (id && destination.id !== id) return;
     
                    let divItem = document.createElement("div");
                    divItem.classList.add("destination__details--item");
                    divItem.innerHTML = `
                        <img src="img/${destination.image}">
                        <div class="destination__details--text">
                            <button class="heart" data-id="${destination.id}">
                                <i class="bi bi-heart"></i>
                            </button>
                            <a href="destination.html?id=${destination.id}">MORE</a>
                        </div>
                    `;
     
                    divElm.append(divItem);
                });
     
                destiSection.append(divElm);
     
                document.querySelectorAll(".heart").forEach((heart) => {
                    let heartId = heart.dataset.id;
                    if (favorites.includes(heartId)) {
                        heart.classList.add("favorite");
                    }
                });
            } else {
                console.error("Element with class 'destination__list' not found.");
            }
        })
        .catch(error => console.error("Error fetching destinations for details:", error));
     
    document.querySelector(".destination__list")?.addEventListener("click", (event) => {
        if (event.target.closest(".heart")) {
            let heart = event.target.closest(".heart");
            let heartId = heart.dataset.id;
     
            heart.classList.toggle("favorite");
     
            if (favorites.includes(heartId)) {
                favorites = favorites.filter((id) => id !== heartId);
            } else {
                favorites.push(heartId);
            }
     
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    });
});
