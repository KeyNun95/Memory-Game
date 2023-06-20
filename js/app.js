/*----- constants -----*/
const allTheCards = document.querySelector(".cards");
const cardPictures = ['kermit', 'pikachu', 'doge', 'monkey', 'pepe', 'spongebob', 'looking-back guy', 'cat sitting at table', 'butterfly guy', 'emotional damage'];
const cardsVariety = [...cardPictures, ...cardPictures];
const cardsTotal = cardsVariety.length;

/*----- state variables -----*/
//build cards on board
function fillCard(cardPicture){
    let element = document.createElement("div");

    element.classList.add("card");
    element.setAttribute("")
}
//needed to loop pictures into cards
for (let i = 0; i < cardsTotal; i++){
    const cardPicture = cardsVariety;

    console.log(cardPicture);
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