// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create array to store cards that are in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
	//Check to see if two cards match and provide feedback to user
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

// Create a function to represent a user flipping a card
var flipCard = function (cardId) {

	// Display the card the user just flipped in the console
	console.log("User flipped " + cards[cardId]);

    // Add card to array to cards in play
    cardsInPlay.push(cards[cardId]);

    // Check to see if two cards have been played
    if (cardsInPlay.length === 2) {
    	// If so, call checkForMatch function
    	checkForMatch();
    }
};


// Manually calling the flipCard function
// to represent a user's play
// Call the flipCard function, passing in an index as the argument
flipCard (0);
// Call the flipCard function, passing in an index as the argument
flipCard(2);

