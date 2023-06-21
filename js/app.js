/*----- constants -----*/
const allTheCards = document.querySelector(".cards");
//address parent section
const cardPictures = ['kermit', 'pikachu', 'doge', 'monkey', 'pepe', 'this is fine', 'kronk', 'cat sitting at table', 'butterfly guy', 'emotional damage'];
const cardsVariety = [...cardPictures, ...cardPictures]; //make the images comeback to my 
const cardsTotal = cardsVariety.length;

/*----- state variables -----*/
//build cards on board- number of cards change as cards are matched
function fillCard(cardPicture){
    let element = document.createElement("div");
    //will make new div section
    element.classList.add("card");
    //will make new class inside my new div
    element.setAttribute("picture", cardPicture);

    return element;
}
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
//board clearedor not = result message
/*----- functions -----*/
//make card flip upon clicking

//start button

//play again button