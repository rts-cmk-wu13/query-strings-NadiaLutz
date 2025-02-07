

let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id");
console.log(id);
 
fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {
 
        let detailSection = document.querySelector(".destination");
 
            let div = document.createElement("div");
            div.classList.add("destination__div");
            div.innerHTML = `
                <img src="img/${data.image}">
               
                <div>
                    <h1>${data.destination}</h1>
                    <h2>${data.title}</h2>
                    <h3>${data.subtitle}</h3>
                    <p>${data.text}</p>
                    <h3 class="faci__h3">${"Faciliteter"}</h3>
                <ul>
                    <li>${data.facilities[0]}</li>
                    <li>${data.facilities[1]}</li>
                    <li>${data.facilities[2]}</li>
                    <li>${data.facilities[3]}</li>
                </ul>
                </div>
            `
            ;
        detailSection.append(div)
        console.log(detailSection);
        
    })



// let search = window.location.search;
// let params = new URLSearchParams(search);
// let id = params.get('id');

// fetch(`/data/${id}.json`)
// .then(response => response.json())
// .then(data => {


//     let body = document.body;
//     body.classList.add("destination")
    
//     let img = document.createElement("img");
//     img.src = `img/${data.image}`;
//     body.appendChild(img);

//     let container = document.createElement('div');
//     container.classList.add("div");
//     body.appendChild(container);

//     let title = document.createElement("h1");
//     title.textContent = data.title;
//     container.appendChild(title);
    
//     let description = document.createElement("p");
//     description.textContent = data.text;
//     container.append(description);
// });

// let container = document.createElement("div");
// container.classList.add("destination");

// container.innerHTML = `
//    ${data.destinations.facilities.map(facilities => `
//        <li>
           
//        </li>`).join("")}
// `;

// sectionElm.appendChild(listElm);


