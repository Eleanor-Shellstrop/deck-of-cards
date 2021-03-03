/*===================================================================================================
          CLASSES
===================================================================================================*/

//  CARD CLASS

class Card {
  constructor(value, suit) {
      this.value = value;
      this.suit = suit;
  }
}   

//  DECK CLASS

class Deck {
  constructor(){
      this.cards = [];
  }
  createDeck() {
      const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
      const suits = ["Hearts", "Diamonds", "Spades", "Clovers"];
      for (let i = 0; i < values.length; i++) {
          for (let j = 0; j < suits.length; j++) {
              Card.value = values[i];
              Card.suit = suits[j];
              this.cards.push(new Card(values[i], suits[j]));
          }
      }
  }
  /*----------------------------------------------------------------------------------
    FISHER-YEATS SHUFFLE
    Code credit to Anh-Thu Huynh for this version
    Article here:https://medium.com/@oldwestaction/randomness-is-hard-e085decbcbb2
    Comments within code are mine for understanding the method
  -----------------------------------------------------------------------------------*/
  shuffle() {
      const { cards } = this;
      for (let i = cards.length - 1; i > 0; i--) {
            //  Find a random number in index
            //  Assign to variable "swapIndex," 
            //  Add new card every loop to this index
          const swapIndex = Math.floor(Math.random() * (i + 1)); 
            //  In this case, i+1 is 52 for cards in the deck
            //  Locate current place in array
          const currentCard = this.cards[i];
            //  Moves the chosen cards to the front of the array
            //  Then swaps with remaining cards
            //  Chooses a card from remaining array
          const cardToSwap = this.cards[swapIndex];
          this.cards[i] = cardToSwap;
          this.cards[swapIndex] = currentCard;
      };
      return this;
  }
}


//  MAKE NEW DECK AND SHUFFLE

const deal = new Deck;
deal.createDeck();
deal.shuffle();

//  Check the shuffled deck
console.log(deal.cards);

/*===================================================================================================
          HTML LINKS
===================================================================================================*/

const dealCards = document.getElementById("board");
const newDeck = document.getElementById("shuffleButton");


newDeck.addEventListener('click', () => { 
  for (let i = 0; i < deal.cards.length; i++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML += deal.cards[i].value + " " + deal.cards[i].suit;
    dealCards.appendChild(div);
  }
})
