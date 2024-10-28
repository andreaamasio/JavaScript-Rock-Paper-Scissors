let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let ran = Math.random()
    let comp_choice = ""
    if (ran<0.33){
        comp_choice="rock"
    } else if (ran<0.66) {
        comp_choice="paper"
    } else {
        comp_choice="scissors"
    }
    return comp_choice
}
function playRound(humanChoice,computerChoice){
    let message=""
    message+=`Computer chose ${computerChoice}.\r\n`
    if (humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        message+="You lose! Paper beats Rock"
    } else if (humanChoice==="rock" && computerChoice==="scissors") {
        humanScore++;
        message+="You win! Rock beats Scissors"
    } else if (humanChoice==="paper" && computerChoice==="rock") {
        humanScore++;
        message+="You win! Paper beats Rock"
    } else if (humanChoice==="paper" && computerChoice==="scissors") {
        computerScore++;
        message+="You lose! Scissors beats Paper"
    } else if (humanChoice==="scissors" && computerChoice==="paper") {
        humanScore++;
        message+="You win! Scissors beats paper"
    } else if (humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        message+="You lose! Rock beats Scissors"  
    } else {
        message+="It's a draft!"
    }
    message+=`\r\nHuman score: ${humanScore} | Computer score: ${computerScore}`
    roundResult.textContent=message
    if (humanScore===5) {
        score.textContent="YOU WON THE GAME!"
        remEventListener()
    };
    if (computerScore===5) {
        score.textContent="COMPUTER WON THE GAME!"
        remEventListener()
    }
    }


const btnRock=document.querySelector("#rock")
const btnPaper=document.querySelector("#paper")
const btnScissors=document.querySelector("#scissors")

const rock= function (){playRound("rock",getComputerChoice())}
const paper=function (){playRound("paper",getComputerChoice())}
const scissors=function(){playRound("scissors",getComputerChoice())}
btnRock.addEventListener("click",rock)
btnPaper.addEventListener("click",paper)
btnScissors.addEventListener("click",scissors)

const resultDiv=document.querySelector(".results")
const roundResult=document.querySelector(".round-result")
const score=document.querySelector(".score")

function remEventListener(){
    btnRock.removeEventListener("click", rock)
    btnPaper.removeEventListener("click", paper)
    btnScissors.removeEventListener("click",scissors)
}





