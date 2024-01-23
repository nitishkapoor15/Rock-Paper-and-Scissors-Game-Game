let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// generate random choice
const genCompChoice = () =>{
   const options = ["rock","paper","scissors"];
   const randomIdx = Math.floor(Math.random()*3);
   return options[randomIdx];
    //rock, paper, scissiors
};

const drawGame = () =>{
    console.log("Game was draw.")
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("you win!")
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        console.log("you lose.")
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
console.log("user choice = ", userChoice);
  //generate computer choice -> modular
  const compChoice = genCompChoice ();
  console.log("comp Choice = ",compChoice)


  if(userChoice === compChoice){
//draw game
drawGame()
}
else{
    let userWin = true;
    if(userChoice ==="rock"){
    //paper,scissors
  userWin = compChoice === "paper"?false:true;
} else if(userChoice === "paper"){
    //rock,scissors
    userWin = compChoice ==="scissors"?false:true;
}
else{
    //rock,paper
    userWin = compChoice ==="rock"?false:true;
}
showWinner(userWin, userChoice, compChoice);
}

}

choices.forEach((choice) =>{
 choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id");

playGame(userChoice)
});
});