// Wait for the DOM to finish loading before running the game
// Get the buttion elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    //this in the for loop reperesents the varible button that has just been clicked.
    // I.e. if we click the additon button, this will refer to this.
    // Let .... or .... is a more modern way of writing a traditional for loop

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

//  Doc strings are used to describe function, they should go above where the function name is declared.
/** 
 * The maain game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // This creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
/**
 * Checks thge answer againsrt the first element in
 * the returned calculatedCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    
    if (isCorrect) {
        alert("Hey! You got it right :)");
    } else {
        alert(`Oh no, you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]} `)
    }
}

/**
 * Get the operands (the numbers) and the operator )plus, minus, etc
 * directly from the dom, and returns the correct answer
 */
function calculateCorrectAnswer() {
    // Using the parseInt function we make sure we return the number as a number
    // When using document getters the information is by default passed as a string
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innertext;

    if (operator = "+") {
        return [operand1 + operand2, "addition"]

    } else {
        alert(`Unimplemented operator ${operator}`);
        throw (`Unimplemented operator ${operator}. Aborting!`);
    }

    runGame(calculatedAnswer[1]);
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}
