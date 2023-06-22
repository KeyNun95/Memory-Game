/*----- constants -----*/
const allTheCards = document.querySelector(".cards");
//address parent section
const cardPictures = [
  {
    name: "this is fine",
    src: "https://media.npr.org/assets/img/2023/01/14/this-is-fine_sq-0bd6d8072e991dc4708be3668cd480ae7df18a11-s800-c85.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "kronk",
    src: "https://i.kym-cdn.com/entries/icons/facebook/000/030/904/Screenshot_10.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "emotional damage",
    src: "https://a.pinatafarm.com/1280x720/29ab338faa/emotional-damage.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "butterfly guy",
    src: "https://imgflip.com/s/meme/Is-This-A-Pigeon.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "why are you running",
    src: "https://w0.peakpx.com/wallpaper/112/1021/HD-wallpaper-why-are-you-running-funy-meme.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "doge",
    src: "https://imgflip.com/s/meme/Doge-2.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "uganda knuckles",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgDLYjhbuakKXOgxpC-CAk74hCGoxEa_uFA&usqp=CAU",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "spongebob fish",
    src: "https://i.kym-cdn.com/photos/images/newsfeed/000/027/792/chocolate.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "drake and josh meme",
    src: "https://i.kym-cdn.com/entries/icons/original/000/025/820/thumbdrake.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
  {
    name: "bernie sanders",
    src: "https://a.pinatafarm.com/926x688/d217ca2319/bernie-sanders-i-am-once-again-asking.jpg",
    front:
      "https://w0.peakpx.com/wallpaper/302/597/HD-wallpaper-blue-abstract-background-glitter-shiny-sparkling.jpg",
  },
];
const cardsVariety = [...cardPictures, ...cardPictures]; //make the images comeback to my
const cardsTotal = cardsVariety.length;

/*----- state variables -----*/
let paused = true;
//identify first card selection
//identify second card selection
let selectedCards = [];

//build cards on board- number of cards change as cards are matched
function fillCard(cardPicture) {
  let img = document.createElement("img");
  img.src = cardPicture.front; //this sets the front of the card
  img.classList.add("card"); //lines 47-49 basically make <img class="dbhjbsd" src="link.jpg"/>
  img.addEventListener("click", function () {
    //when button is clicked img.src will change to cardPicture.src
    img.src = cardPicture.src;
    img.id = cardPicture.name; //id only seen in html

    selectedCards.push(cardPicture);
    if (selectedCards.length === 2) {
      if (
        selectedCards[0].name ===
        selectedCards[1].name
      ) {
        console.log("match");
        selectedCards = [];
      } else {
        console.log("wrong");
        const wrongCards = selectedCards.map(function(cardObj){
            return document.getElementById(cardObj.name)
        })//wrap line 98 thru 102 in setTimeOut function

        wrongCards.forEach(function(wrongCardEl){
            wrongCardEl.src = cardPictures[0].front;
        })
        selectedCards = [];
      }
    }
  });
  return img;
}

//needed to loop pictures into cards
for (let i = 0; i < cardsTotal; i++) {
  let randomIndex = Math.floor(Math.random() * cardsVariety.length);
  //so cards can be in random places
  let cardPicture = cardsVariety[randomIndex];
  //card can have pictre in it
  let card = fillCard(cardPicture);

  allTheCards.appendChild(card);
  //will attach card inside cards section in body:html
}

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

//Checklist:
//match function
//start button
//play again button
//you win message
//you lose message
//pairs
//timer?
