let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user = document.querySelector("#user");
const com = document.querySelector("#com");

const newBtn = document.querySelector("#reset");

const genComChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};
const drawGame = () =>{
    msg.innerText = "Game is Draw.Play again";
    msg.style.backgroundColor = "#081b31";
};
let count = 0;
const showWinner = (userWin, userChoice, comChoice)=> {
    if(userWin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";

    } else{
        comScore++;
        com.innerText = comScore;
        msg.innerText = `You lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};
const playGame = (userChoice)  =>{
    console.log("User's choice is ", userChoice);
    //coumputer choice
    const comChoice = genComChoice();
    console.log("Computer's choice is ", comChoice);

    if(userChoice === comChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissor
            userWin = comChoice === "scissor" ?  false : true;
        } else{
            //rock,paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }

};
 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const restart = () =>{
    userScore = 0;
    comScore = 0;

    user.innerText = userScore;
    com.innerText = comScore;
    msg.innerText = "Play your Move";
    msg.style.backgroundColor = "#081b31";
};
newBtn.addEventListener("click", restart);