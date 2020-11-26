let userScore = 0;

function showMessage(userResult) {
    document.getElementById('userResult').textContent = userResult;
}

function showCpu(cpuResult) {
    document.getElementById('cpuResult').textContent = cpuResult;
}

function showGame(gameResult) {
    document.getElementById('gameResult').textContent = gameResult;
}

function showRound(round) {
    document.getElementById('round').textContent = round;
}

function showScore(score){
    document.getElementById('score').textContent = score;
}

function userLose(){
    showGame("You Lose!!!");
}

function userWin(){
    showGame("You Win!!!");
    userScore += 1;
    showScore(userScore);
}