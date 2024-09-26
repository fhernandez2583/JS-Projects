console.log("Hi lets Play!");
//User Ouput
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("Invalid Input! Type: 'rock', 'paper' or 'scissors'");
    }
};
//console.log(getUserChoice("rock"));
//Computer Output
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    {
        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else if (randomNumber === 2) {
            return "scissors";
        }
    }
};
//console.log(getComputerChoice());
// Winner output
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "tie";
    }
    if (userChoice === "rock" && computerChoice === "paper") {
        return "Computer Wins!";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "Computer Wins!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return "Computer Wins!";
    } else if (userChoice === "bomb") {
        return "User Wins!";
    } else {
        return "User Wins!";
    }
};
// Setup Play Game
const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('Your throw: ' + userChoice);
    console.log('Computer throw: ' + computerChoice);
    //Results
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();