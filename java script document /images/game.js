let player = {
  name: "User",
  chips: 145
}
let sum = 0
let cards = []
let message = ""
let hasblackjack = false
let isalive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomnumber =Math.floor (Math.random() * 13) + 1 
  
  if (randomnumber > 10) {
    return 10
  }
  else if(randomnumber ===1){
    return 11
  }
    else {
      return randomnumber 
    }
}

function startgame(){
isalive = true
hasblackjack= false
let firstcard = getRandomCard()
let secondcard = getRandomCard()
 sum = firstcard + secondcard
 cards = [firstcard , secondcard]
  rendergame()
}

function rendergame() {
  cardEl.textContent = "Cards : " 
  
  for ( let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " "
  }
  
  sumEl.textContent = "Sum : " + sum
  if (sum < 21) {
    message = " Pick new card , to continue 🥹"
  }
  else if (sum === 21) {
    message = " you won 🎉🥳🥳!!!!"
    hasblackjack = true
  }
  else {
    message = " You loose😭🥺 "
    isalive = false
  }
  messageEl.textContent = message
}
function newcard(){
  if ( isalive === true && hasblackjack === false) {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  rendergame()
}
    }
