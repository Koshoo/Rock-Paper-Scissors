let options = ["rock", "paper", "scissors"]

        function computerPlay() {
            let choose = Math.floor(Math.random() * 3)
            return options[choose]
        }

        function playRound(playerSelection, computerSelection) {
            computerSelection = computerPlay()
            playerSelection = prompt("Enter Rock/Paper/Scissors").toLowerCase()


            console.log("Comupter selects - " + computerSelection)
            console.log("Player selected - " + playerSelection)

            if (computerSelection === playerSelection) {
                return 0
            }

            if (computerSelection === "rock" && playerSelection === "paper") {
                return 1
            }

            if (computerSelection === "rock" && playerSelection === "scissors") {
                return 2
            }

            if (computerSelection === "paper" && playerSelection === "scissors") {
                return 1
            }

            if (computerSelection === "paper" && playerSelection === "rock") {
                return 2
            }

            if (computerSelection === "scissors" && playerSelection === "rock") {
                return 1
            }
            if (computerSelection === "scissors" && playerSelection === "paper") {
                return 2
            }
            else {
                console.log("Please choose one of the options!")
                return 0
            }

        }


        function game() {
            let computerScore = 0
            let playerScore = 0

            for (let i = 0; i < 5; i++) {
                currentRound = playRound()

                if (currentRound == 0) {
                    console.log("Round is tie")
                    i--
                }


                if (currentRound == 1) {
                    playerScore++
                } else if(currentRound == 2) {
                    computerScore++
                }

                console.log("Player score - " + playerScore)
                console.log("Computer score - " + computerScore)
            }
            if (playerScore > computerScore) {
                alert("You Win!")
            } else {
                alert("Computer Wins.")
            }
        }





