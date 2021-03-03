class Deck {
  constructor() {
    this.deck = [];
  
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const suits = ["Hearts", "Diamonds", "Spades", "Clovers"];
    
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
          let value = values[i];
          let suit = suits[j];
          this.deck.push({value, suit});
        } 
      }
  }
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      //find a random number in index, assign to variable "swapIndex," add new i every loop to this index
      const swapIndex = Math.floor(Math.random() * (i + 1)); //In this case, i+1 is 52 for cards in the deck
      //locate current place in array
      const currentCard = deck[i];
      const cardToSwap = deck[swapIndex];
      deck[i] = cardToSwap;
      deck[swapIndex] = currentCard;
    };
    return this;
  }
}

const deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deck);