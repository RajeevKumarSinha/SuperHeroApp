//dynamic data div is the div that contains all of the elements to be rendered on the screen after click or search
let dynamicDataDiv = document.querySelector(".dynamicData");
// searchBtn is a constant variable that stores the element with the class name of "search" in it.
const searchBtn = document.querySelector('.search');
// randomHeroBtn is a constant varialble that stores the element with the class: 'random'
const randomHeroBtn = document.querySelector(".random");
// usrInptField is a variable that stores the element with className:usrInpt 
const usrInptField = document.getElementById("usrInpt");

// randomNoFun generates random number between "0" and "562"
let randomNoFun = () => Math.floor(Math.random() * 562);


// render function takes 'data' which is the object format of the api which we are fetching and 
// also the index of the hero to display details of particular hero  
                                //  or 
// This is a function that takes two parameters: indexOfHero and data. 
// The function renders the hero's name, image, and powerstats on the screen.
const render = (indexOfHero,data) => {
    dynamicDataDiv.innerHTML =
        `
            <h1 class="heroName">${data[indexOfHero].name}</h1>
            <img src="${data[indexOfHero].images.md}" alt="" class="heroImg">
            <div class="heroDetailsBox">
                <p class="intel">&#129504; <span>INTELLIGENCE: ${data[indexOfHero].powerstats.intelligence}</span></p>
                <p class="strength">&#129470; <span>STRENGTH : ${data[indexOfHero].powerstats.strength}</span></p>
                <p class="strength">&#128498; <span>SPEED : ${data[indexOfHero].powerstats.speed}</span></p>
                <p class="strength">&#127947; <span>DURABILITY : 1${data[indexOfHero].powerstats.durability}</span></p>
                <p class="strength">&#128267; <span> POWER : 1${data[indexOfHero].powerstats.power}</span></p>
                <p class="strength">&#9876; <span> COMBAT : 1${data[indexOfHero].powerstats.combat}</span></p>
            </div>
        `
}





// superHeroFetch function brings the object of superHero and 
// gives the result according to the conditions 

function superHeroFetch() {
    // this.id gives the id of the clicked btn 
    console.log(this.id)
    return fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(response => response.json())
        .then(data => {
            if(this.id == "random"){
            let randomNo = randomNoFun();
            render(randomNo,data);
            }else{
                data.forEach((item, index) => {
                    if(item.name.toLowerCase() == usrInptField.value){
                        return render(index,data);
                    }
                })
            }
        })
}





// *
// *
// this was the code before optimizing the code to use one function only for 
// both buttons 

// searchBtn.onclick = () => {
//     console.log(this.id)
//     if (usrInptField.value == "") {
//         return;
//     } else {
//         // console.log(usrInptField.value)
//         fetch("https://akabab.github.io/superhero-api/api/all.json")
//             .then(response => response.json())
//             .then(data => {
//                 data.forEach((item, index) => {
//                     if(item.name.toLowerCase() == usrInptField.value){
//                         return render(index,data);
//                     }
//                 })
//             })
//     }
// }
// *
// *
// adds an event listner onclick to the randomHeroBtn and calls superHeroFetch function 
randomHeroBtn.onclick = superHeroFetch
// adds an event listner onclick to the searchBtn and calls superHeroFetch function 
searchBtn.onclick = superHeroFetch




