function createDeck(): string[] {
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
  const deck: string[] = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push(`${value}${suit}`);
    }
  }

  return shuffle(deck);
}

function shuffle(deck: string[]): string[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function deal(count: number, deck: string[]): string[] {
  return deck.splice(0, count);
}

const newDeck = createDeck();
const player1 = deal(2, newDeck);
const player2 = deal(2, newDeck);

console.log(player1);
