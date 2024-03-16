
let userScore = localStorage.getItem('user-Score') ? parseInt(localStorage.getItem('user-Score')) : 0;
let computerScore = localStorage.getItem('computer-Score') ? parseInt(localStorage.getItem('computer-Score')) : 0;

console.log('Initial User Score:', userScore);
console.log('Initial Computer Score:', computerScore);


function playGame(userChoice) {
    const choices = ['rock', 'scissor', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);

    console.log('Result:', result);


    document.getElementById('human-choice-img').src = getUserImagePath(userChoice);
    document.getElementById('computer-choice-img').src = getComputerImagePath(computerChoice);

    console.log(userChoice);
    console.log(computerChoice);

    //Returns the last game score
    localStorage.setItem('lastUserScore', userScore);
    localStorage.setItem('lastComputerScore', computerScore);


    if (result === 'tie') {
        window.location.href = `PRStie.html?user=${userChoice}&computer=${computerChoice}`;
    } else if (result === 'win') {
        window.location.href = `PRSwin.html?user=${userChoice}&computer=${computerChoice}`;
    } else {
        window.location.href = `PRSlost.html?user=${userChoice}&computer=${computerChoice}`;
    }

    console.log('Updated User Score in playGame:', localStorage.getItem('user-Score'));
    console.log('Updated Computer Score in playGame:', localStorage.getItem('computer-Score'));
}

function determineWinner(userChoice, computerChoice) {
    console.log('User Score:', userScore);
    console.log('Computer Score:', computerScore);
    

    if (userChoice === computerChoice) {
        userScore++;
        computerScore++;
        localStorage.setItem('user-Score',userScore);
        localStorage.setItem('computer-Score',computerScore);
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        userScore++;
        localStorage.setItem('user-Score', userScore);
        updateScore();
        return 'win';
    } else {
        computerScore++;
        localStorage.setItem('computer-Score', computerScore);
        updateScore();
        return 'lose';
    }
    
}

function updateScore() {
    //userScoreElements = document.querySelectorAll('.user-Score');
    //computerScoreElements = document.querySelectorAll('.computer-Score');
    userScore=parseInt(localStorage.getItem('user-Score'))|| 0;
    computerScore=parseInt(localStorage.getItem('computer-Score'))|| 0;

     console.log('Updated User Score:', userScore);
    console.log('Updated Computer Score:', computerScore);


    document.querySelectorAll('.user-Score').forEach(element => {
        element.textContent = userScore;
    });

    document.querySelectorAll('.computer-Score').forEach(element => {
        element.textContent = computerScore;
    });

  //  document.getElementsByClassName('user-Score')[0].innerText = userScore;
    //document.getElementsByClassName('computer-Score')[0].innerText = computerScore;


    console.log('Score updated!');
}


function getUserImagePath(userChoice) {
    const userImagePaths = {
        'rock': 'Rock.png',
        'scissor': 'Scissor.png',
        'paper': 'Paper.png'
    };
    return userImagePaths.hasOwnProperty(userChoice) ? `/PRS/${userImagePaths[userChoice]}`: '/PRS/default_human.png';
}

function getComputerImagePath(computerChoice) {
    const computerImagePaths = {
        'rock': 'Rock.png',
        'scissor': 'Scissor.png',
        'paper': 'Paper.png'
    };
    return computerImagePaths.hasOwnProperty(computerChoice) ? `/PRS/${computerImagePaths[computerChoice]}` : '/PRS/default_computer.png';
}

function resetScoresAndUI() {
    localStorage.setItem('user-Score', userScore);
    localStorage.setItem('computer-Score', computerScore);
    updateScore();
    document.getElementById('human-choice-img').src = '';
    document.getElementById('computer-choice-img').src = '';

    console.log('resetscore',userScore);
    console.log('resetscore',computerScore);
}

function appendPlayagain() {

    const lastUserScore = localStorage.getItem('lastUserScore');
    const lastComputerScore = localStorage.getItem('lastComputerScore');
    
    console.log('Last User Score:', lastUserScore);
    console.log('Last Computer Score:', lastComputerScore);
   
    userScore = parseInt(localStorage.getItem('lastUserScore')) || 0;
    computerScore = parseInt(localStorage.getItem('lastComputerScore')) || 0;

    console.log('Updated User Score:', userScore);
    console.log('Updated Computer Score:', computerScore);

    resetScoresAndUI();
    

    localStorage.setItem('user-Score', userScore);
    localStorage.setItem('computer-Score', computerScore);

   
    document.getElementById('human-choice-img').src = '';
    document.getElementById('computer-choice-img').src = '';

    updateScore();

    window.location.href = 'PRSfront.html';
}

function appendReplay() {

    userScore = parseInt(localStorage.getItem('lastUserScore')) || 0;
    computerScore = parseInt(localStorage.getItem('lastComputerScore')) || 0;

    resetScoresAndUI();

    localStorage.setItem('user-Score', userScore);
    localStorage.setItem('computer-Score', computerScore);

    updateScore();

    window.location.href = 'PRSfront.html';
}

function appendRules() {
    var rulesPopup = document.getElementById("rulesPopup");
    rulesPopup.style.display = "block";
}

function closeRulesPopup() {
    var rulesPopup = document.getElementById("rulesPopup");
    rulesPopup.style.display = "none";
}






