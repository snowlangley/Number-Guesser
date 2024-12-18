let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;




// Write your code below:
function generateTarget() {
    const minNum = Math.ceil(0);
    const maxNum = Math.floor(10);
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    return randomNumber;
}

function compareGuesses(humanScore, computerScore, randomNumber) {
    const humanScoreDistance = Math.abs(humanScore - randomNumber);
    const computerScoreDistance = Math.abs(computerScore - randomNumber);

    if (humanScoreDistance <= computerScoreDistance) {
        return true;
    } else {
        return false;
    }
}


function updateScore(winner) {
    if (winner === "computer") {
        computerScore += 1;
    } else if (winner === "human") {
        humanScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber = currentRoundNumber += 1;
}

//console.log(advanceRound(winner));