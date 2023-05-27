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
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}
