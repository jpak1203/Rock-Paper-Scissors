let game = () => {

    let computerPlay = () => {
        let choice = Math.floor((Math.random() * 3) + 1);
        switch(choice) {
            case 1:
                return "Rock";
            case 2:
                return "Paper";
            case 3:
                return "Scissors";
        }   
    }

    let playRound = (player, computer) => {
        if (player.toUpperCase() === "ROCK") {
            if (computer.toUpperCase() === "PAPER") return "You lose! Paper beats Rock";
            else if (computer.toUpperCase() === "SCISSORS") return "You win! Rock beats Scissors";
            else if (computer.toUpperCase() === "ROCK") return "Draw! Roll on outta here, ya filthy Rocks";
        } else if (player.toUpperCase() === "PAPER") {
            if (computer.toUpperCase() === "PAPER") return "Draw! Paper? Tearable...";
            else if (computer.toUpperCase() === "SCISSORS") return "You lose! Scissors beats Paper";
            else if (computer.toUpperCase() === "ROCK") return "You win! Paper beats Rock";
        } else if (player.toUpperCase() === "SCISSORS") {
            if (computer.toUpperCase() === "PAPER") return "You win! Scissors beats Paper";
            else if (computer.toUpperCase() === "SCISSORS") return "Draw! Cut to the chase will ya? Damn Scissors..";
            else if (computer.toUpperCase() === "ROCK") return "You lose! Rock beats Scissors";
        }

        return "What? What kind of hand do you have? Its Rock, Paper, Scissors! Not grow fifty fingers and make an intricate shadow puppet.."
    }

    const playerChoice = document.querySelector(".selected").parentNode.id;
    const computerChoice = computerPlay();

    let winLose = playRound(playerChoice, computerChoice);
    let result = document.querySelector(".result");
    let message = document.querySelector(".result h1");

    console.log(computerChoice);
    if (winLose.substring(4, 8) === "lose") {
        message.textContent = winLose;
        result.style.visibility = "visible";
        result.style.backgroundColor = "red";
    } else if (winLose.substring(4, 7) === "win") {
        message.textContent = winLose;
        result.style.visibility = "visible";
        result.style.backgroundColor = "green";
    } else if (winLose.substring(0, 4) === "Draw") {
        message.textContent = winLose;
        result.style.visibility = "visible";
        result.style.backgroundColor = "orange";
    }
}

let select = function() {

    let flag = this.classList.contains("selected");

    let imgs = document.querySelectorAll("img")
    imgs.forEach((choice) => {
        choice.classList.remove("selected");
    });

    if (flag) this.classList.remove("selected");
    else this.classList.add("selected");
}

let restart = function() {
    let imgs = document.querySelectorAll("img")
    imgs.forEach((choice) => {
        choice.classList.remove("selected");
    });

    this.style.visibility = "hidden";
}

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", select);
});

document.querySelector("#shoot").addEventListener("click", game);

document.querySelector(".result").addEventListener("click", restart);