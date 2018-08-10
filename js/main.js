// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create array to store cards that are in play
var cardsInPlay = [];

// Create variable cardOne to represent first card flipped
var cardOne = cards[0];

// Add card to array of cards in play
cardsInPlay.push(cardOne);

// Use console.log() to display card user flipped
console.log("User flipped " + cardOne);

// Create variable cardTwo to represent second card flipped
var cardTwo = cards[2];

// Add card to array of cards in play
cardsInPlay.push(cardTwo);

// Use console.log() to display card user flipped
console.log("User flipped " + cardTwo);

// Check to see if two cards have been played
if (cardsInPlay.length === 2) {

// Check to see if two cards match and provide feedback to player
if (cardsInPlay [0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
 }
}