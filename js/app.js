/*----- constants -----*/
const allTheCards = document.querySelector(".cards");
//address parent section
const cardPictures = [
    {name: "this is fine", 
    src: "https://media.npr.org/assets/img/2023/01/14/this-is-fine_sq-0bd6d8072e991dc4708be3668cd480ae7df18a11-s800-c85.jpg", 
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {name:"kronk",
    src: "",
    front:"https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {name: "emotional damage",
    src: "",
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {name: "butterfly guy",
    src: ,
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {"why are you running",
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {"doge",
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {"uganda knuckles",
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {"",
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {'butterfly guy',
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}, 
    {'emotional damage',
    front: "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg"}];
const cardsVariety = [...cardPictures, ...cardPictures]; //make the images comeback to my 
const cardsTotal = cardsVariety.length;

/*----- state variables -----*/
//build cards on board- number of cards change as cards are matched
function fillCard(cardPicture){
    let img = document.createElement("img");
    //will make new div section
    img.src = cardPicture.front

    img.classList.add("card") //<img class
    //will make new class inside my new div
    img.addEventListener("click", function(){
        //when button is click img.src will change to cardPicture.src
        img.src = cardPicture.src;
    });

    return img;
}

// topOfCard(card);

//needed to loop pictures into cards
for (let i = 0; i < cardsTotal; i++){
    let randomIndex = Math.floor(Math.random() * cardsVariety.length);
    //so cards can be in random places
    let cardPicture = cardsVariety[randomIndex];
    //card can have pictre in it
    let card = fillCard(cardPicture); 
    
    allTheCards.appendChild(card);
    //will attach card inside cards section in body:html
}

//identify first card selection
//identify second card selection

/*----- cached elements -----*/

/*----- event listeners -----*/
//click so cards can be selected
// element.addEventListener("click", function(){
//     if (wrongCard){
//         return; //exit function- will return back to front of card 
//     }

//     element.style.backgroundColor = cardPicture;
// });
// //board clearedor not = result message
// /*----- functions -----*/
// //make card flip upon clicking
// function flipCard() {
//     firstCard.push(cardPictures(cardPicture))
// }
//start button

//play again button