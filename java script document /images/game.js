let firstcard = 10
let secondcard = 4
let sum = firstcard + secondcard
let message = ""
let hasblackjack = false
let isalive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function startgame() {
  cardEl.textContent = "Cards : " + firstcard + " " + secondcard 
    sumEl.textContent = "Sum : " + sum
      if (sum < 21) {
          message = " Pick new card , to continue"
            }
              else if (sum === 21) {
                  message = " you won !!!!"
                      hasblackjack = true
                        }
                          else {
                              message = " You loose "
                                  isalive = false
                                    }
                                      messageEl.textContent = message
                                      }
                                      