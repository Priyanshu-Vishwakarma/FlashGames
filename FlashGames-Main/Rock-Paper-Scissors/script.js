const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscore = 0;
let computerscore = 0;


const drawGame = () => {
    msg.innerText =`Game was draw :]`;
    msg.style.backgroundColor = "rgb(45, 27, 57)";
}
const showWinner = (userwin) => {
    console.log();
    console.log();
    if(userwin){
        msg.innerText =`You Won :)`;
        msg.style.backgroundColor = "green";
        userScore.innerText= ++userscore;
    }else {
        msg.innerText =`You Lost :(`;
        msg.style.backgroundColor = "red";
        computerScore.innerText= ++computerscore;
    }
}


const genCompChoice = () => {
    const index = Math.floor(Math.random() * 3);
    const options = ["paper","rock","scissors"];
    return options[index];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();


    
    if(userChoice===compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice==="rock"){
            if(compChoice=="scissors"){userwin= true;}
            else {userwin= false;}
        }
        else if(userChoice==="paper"){
            if(compChoice=="rock"){userwin= true;}
            else {userwin= false;}
        }
        else if(userChoice==="scissors"){
            if(compChoice=="paper"){userwin= true;}
            else {userwin= false;}
        }
        showWinner(userwin);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});