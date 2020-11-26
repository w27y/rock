/*
Author: Mike Shehata
Date:  11/25/2020
Version: 1.0
*/

main();

//These are the controls of the game
function main () {
    let roundNumber = 0;
    const rockButton = document.getElementById('rockButton');
    rockButton.addEventListener('click',function(){
    showRound(roundNumber += 1);
    showMessage("Rock");
    cpuLogic('Rock');
    });
    const paperButton = document.getElementById('paperButton');
    paperButton.addEventListener('click',function(){
    showRound(roundNumber += 1);
    showMessage("Paper");
    cpuLogic('Paper');   
    });
    const scissorsButton = document.getElementById('scissorsButton');
    scissorsButton.addEventListener('click',function(){
    showRound(roundNumber += 1);
    showMessage("Scissors");
    cpuLogic('Scissors');  
    });
}

//Logic that compares user vs CPU options
function cpuLogic(userOption) {
    const cpuArray = Array('Rock', 'Paper', 'Scissors');
    const random = Math.floor(Math.random() * cpuArray.length);
    showCpu(cpuArray[random]);
    let userScore = 0;
    if (userOption === cpuArray[random]) {
        showGame("Its a Tie!!!");
    }
    else if (userOption === "Rock" && cpuArray[random] === "Paper") {
        userLose();
    }
    else if (userOption === "Rock" && cpuArray[random] === "Scissors") {
        userWin();
    }
    else if (userOption === "Paper" && cpuArray[random] === "Scissors") {
        userLose();
    }
    else if (userOption === "Paper" && cpuArray[random] === "Rock") {
        userWin();
    }
    else if (userOption === "Scissors" && cpuArray[random] === "Rock") {
        userLose();
    }
    else if (userOption === "Scissors" && cpuArray[random] === "Paper") {
        userWin();
    }
    else {
        showGame(null);
    }
}