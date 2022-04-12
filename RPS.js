const computerOptions = ["rock" , "paper","scissors"]
const resultDisplay = document.querySelector("#score") 

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
    }
    else if (won === false) {
        resultDisplay.innerText = `You Lost , ${computerSelect} beats  ${playerSelect}`
    }

    else if (won === null) {resultDisplay.innerText = `Its a Draw `}
}









// for(let g = 0 ; g < 10 ; g++) {
//     let i = Math.floor(Math.random() * 3)
//     console.log(g +" "+ i)
// }
