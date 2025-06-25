// function createDeck(): string[] {
//   const suits = ["♠︎", "♣︎", "♡", "♢"];
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//   ];
//   const deck: string[] = [];

//   for (const suit of suits) {
//     for (const value of values) {
//       deck.push(`${value}${suit}`);
//     }
//   }

//   return shuffle(deck);
// }

// function shuffle(deck: string[]): string[] {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//   }
//   return deck;
// }

// function deal(count: number, deck: string[]): string[] {
//   return deck.splice(0, count);
// }

// function flop(deck: string[]): string[] {
//   const cards: string[] = [];

//   deal(1, deck);
//   cards.push(...deal(3, deck));

//   deal(1, deck);
//   cards.push(...deal(1, deck));

//   deal(1, deck);
//   cards.push(...deal(1, deck));

//   return cards;
// }

// const newDeck = createDeck();
// const player1 = deal(2, newDeck);
// const player2 = deal(2, newDeck);
// const cards = flop(newDeck);
// console.log(player1);
// console.log(cards);

class Card {
  private value: string;
  private suit: string;

  constructor(value: string, suit: string) {
    this.value = value;
    this.suit = suit;
  }

  toString(): string {
    return `${this.value}${this.suit}`;
  }
}

class Deck {
  private cards: Card[] = [];

  constructor() {
    this.initialize();
    this.shuffle();
  }

  private initialize(): void {
    const suits = ["♠︎", "♣︎", "♡", "♢"];
    const values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card(value, suit));
      }
    }
  }

  private shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(count: number): Card[] {
    return this.cards.splice(0, count);
  }

  getRemainingCount(): number {
    return this.cards.length;
  }
}

class Game {
  private deck: Deck;
  public player1: Card[] = [];
  public player2: Card[] = [];
  public cards: Card[] = [];

  constructor() {
    this.deck = new Deck();
    this.player1 = this.deck.deal(2);
    this.player2 = this.deck.deal(2);
    this.revealFlop();
  }

  private revealFlop(): void {
    this.deck.deal(1);
    this.cards.push(...this.deck.deal(3));

    this.deck.deal(1);
    this.cards.push(...this.deck.deal(1));

    this.deck.deal(1);
    this.cards.push(...this.deck.deal(1));
  }

  showHands(): void {
    console.log(
      "Main du joueur 1:",
      this.player1.map((card) => card.toString())
    );
    console.log(
      "Main du joueur 2:",
      this.player2.map((card) => card.toString())
    );
    console.log(
      "Cartes communes:",
      this.cards.map((card) => card.toString())
    );
    console.log(
      "Cartes restantes dans le deck:",
      this.deck.getRemainingCount()
    );
  }
}

const newgame = new Game();

newgame.showHands();
