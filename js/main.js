// Create an array to store cards
var cards = [

{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"

},

{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}

];

// Create array for cards in play

var cardsInPlay = [];
// Create a function to check for a match
var checkForMatch = function() {
	// Check to see if two cards match and provide feedback

	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		
	} else {
		alert("Sorry, try again.")
	}
};

// Create a function to represent user flippling card
var flipCard = function () {
	
	cardID = this.getAttribute('data-id');
	console.log(cardID);

	// Add card to array of cardsInPlay

	cardsInPlay.push(cards[cardID].rank);

	// Display card image

	this.setAttribute('src', cards[cardID].cardImage);

	// Show image in console

	console.log(cards[cardID].cardImage);

	// Display suit in console

	console.log(cards[cardID].suit)

	// Check tos ee if two cards have been played

	if (cardsInPlay.length === 2) {
		checkForMatch();

		cardsInPlay =[];
	}

};

// Creation of game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src', "images/back.png");
			cardElement.setAttribute('data-id', i);

		// Add event lister so when card is clicked function flipcard is executed

			cardElement.addEventListener('click', flipCard);

		// Append card to board

		document.getElementById('game-board').appendChild(cardElement);


  }

};



// create the board

createBoard();
