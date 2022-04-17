const computerOptions = ["rock" , "paper","scissors"]
const resultDisplay = document.querySelector("#score") 

document.querySelector("#playerRock").onclick = () => { compare('rock') }
document.querySelector("#playerPaper").onclick = () => { compare('paper') }
document.querySelector("#playerScissors").onclick = () => { compare('scissors')}


const playerPoints = document.querySelector("#playerScore")
const computerPoints = document.querySelector("#computerScore")
let Pscore = 0
let Cscore = 0

const restart = document.querySelector("#restart")
const p = document.querySelector("#p")
const c = document.querySelector("#c")




function compare(playerSelect) {
    let won = false
    let i = Math.floor(Math.random() * 3)
    let computerSelect = computerOptions[i]
    

    if( playerSelect === "rock" && computerSelect === "scissors" ) { won = true}
    else if( playerSelect === "paper" && computerSelect === "rock" ) { won = true}
    else if( playerSelect === "scissors" && computerSelect === "paper" ) { won = true}
    else if (playerSelect === computerSelect ) { won = null}
    else {won = false}

 
    

    if ( won === true) {
        resultDisplay.innerText = `You Won , ${playerSelect} beats ${computerSelect}`
        Pscore += 1
    }
    else if (won === false) {
        resultDisplay.innerText = `You Lost , ${computerSelect} beats  ${playerSelect}`
        Cscore +=1
    }

    else if (won === null) {resultDisplay.innerText = `Its a Draw , You Both Chose ${playerSelect}`}

    playerPoints.innerText = Pscore
    computerPoints.innerText = Cscore

    if( Pscore === 5 ) { playerWon()}
    if( Cscore === 5 ) { computerWon()}

}
function playerWon() {
    resultDisplay.innerText = "Congratulations , Youuuu Win"

    document.querySelector("#playerRock").onclick = () => {  }
    document.querySelector("#playerPaper").onclick = () => {  }
    document.querySelector("#playerScissors").onclick = () => { }

    c.classList.add("hide")
    restart.classList.remove("hide")
}
function computerWon() {
    resultDisplay.innerText = "YOU LOST , TO A COMPUTER I MADE ,YOU FUCKING LOOOOOOSERRRRRR LOOOL"

    document.querySelector("#playerRock").onclick = () => {  }
    document.querySelector("#playerPaper").onclick = () => {  }
    document.querySelector("#playerScissors").onclick = () => { }

    p.classList.add("hide")
    restart.classList.remove("hide")
}

restart.addEventListener("click" , () => {
// restart

document.querySelector("#playerRock").onclick = () => { compare('rock') }
document.querySelector("#playerPaper").onclick = () => { compare('paper') }
document.querySelector("#playerScissors").onclick = () => { compare('scissors')}


    p.classList.remove("hide")
    c.classList.remove("hide")
    restart.classList.add("hide")
    Pscore = 0 ; Cscore = 0

resultDisplay.innerText = "Result"
playerPoints.innerText = Pscore
computerPoints.innerText = Cscore
})







// for(let g = 0 ; g < 10 ; g++) {
//     let i = Math.floor(Math.random() * 3)
//     console.log(g +" "+ i)
// }
