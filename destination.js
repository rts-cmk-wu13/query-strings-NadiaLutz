console.log(window.location);
 
let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id");
console.log(id);

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

 
fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {
 
        let detailSection = document.querySelector(".detail__section");
        detailSection.classList.add("detail__section--details");
 
        // let divElm = document.createElement("div");
        // divElm.classList.add("detail__div");
 
            let div = document.createElement("div");
            div.classList.add("detail__div--item");
            div.innerHTML = `
            <div>
                ${favorites.includes(id) ? `
                <button class="heart__favorite--btn">
                    <i class="bi bi-heart-fill"></i>
                    <p>Favorite</p>
                </button>
                ` : ''}


                <img src="img/${data.image}"> 
                </div>
                <div>
                <div>
                    <h1>${data.destination}</h1>
                    <h2>${data.title}</h2>
                      <p>${data.subtitle}</p>
                     </div>
                  
                    <p>${data.text}</p>
                    <h3>${"Faciliteter"}</h3>
                <ul>
                    <li>${data.facilities[0]}</li>
                    <li>${data.facilities[1]}</li>
                    <li>${data.facilities[2]}</li>
                    <li>${data.facilities[3]}</li>
                </ul>
                </div>
            `    
        detailSection.append(div)
    })
