function computerChoice() {
  //Every tool is asigned to a value, Rock = 0, Paper = 1, Scissor = 2//
  return Math.floor(Math.random() * 3);
}

function numberToTool(tool) {
  if(tool == 2){
    return "scissors";
  } else if (tool == 1){
    return "paper"
  } else {
    return "rock"
  }
}

//2, 1 and 0 represent win draw and lose respectively//
//when the player chooses paper or scissors and wins, player - computer == 1, because (1,0) is a win and (2,1) is a win//
//the only other value that wins is (0,2), that explains the firts if//
function playround(player, computer) {
  if(player - computer == 1 || (player == 0 && computer == 2)){
    let res = 2;
    player_score++;
    const display_result = document.querySelector('.score');
    display_result.innerText = `${player_score}-${computer_score}`;
    const desc = document.querySelector('.description');
    desc.innerText = `You win, ${numberToTool(player)} beats ${numberToTool(computer)}`;
    return res;
  } else if(player == computer){
    let res = 1;
    const desc = document.querySelector('.description');
    desc.innerText = `You drew this round, both selected ${numberToTool(computer)}`;
    return res;
  } else {
    let res = 0;
    computer_score++;
    const display_result = document.querySelector('.score');
    display_result.innerText = `${player_score}-${computer_score}`;
    const desc = document.querySelector('.description');
    desc.innerText = `You lose, ${numberToTool(computer)} beats ${numberToTool(player)}`;
    return res;
  }
}

function finishMatch(won) {
  let retry = document.querySelector('.retry')
  let result = document.querySelector('.result');
  if(won == true){
    document.querySelector('.score').innerText = "";
    document.querySelector('.description').innerText = "";
    let win = document.createElement('p');
    win.innerText = "You Win";
    result.insertBefore(win, result.firstChild);
  } else {
    document.querySelector('.score').innerText = "";
    document.querySelector('.description').innerText = "";
    let win = document.createElement('p');
    win.innerText = "You Lose";
    result.insertBefore(win, result.firstChild);
  }
  retry.setAttribute('style', 'visibility: visible');
}

let player_score = 0;
let computer_score = 0;

const button_rock = document.querySelector('.rock');
button_rock.addEventListener('click', () => {
  if(player_score < 5 && computer_score < 5){
    playround(0, computerChoice());
    if(player_score == 5){
      finishMatch(true);
    } else if(computer_score == 5){
      finishMatch(false);
    }
  }
});

const button_paper = document.querySelector('.paper');
button_paper.addEventListener('click', () => {
  if(player_score < 5 && computer_score < 5){
    playround(1, computerChoice());
    if(player_score == 5){
      finishMatch(true);
    } else if(computer_score == 5){
      finishMatch(false);
    }
  }
})

const button_scissors = document.querySelector('.scissors');
button_scissors.addEventListener('click', () => {
  if(player_score < 5 && computer_score < 5){
    playround(2, computerChoice());
    if(player_score == 5){
      finishMatch(true);
    } else if(computer_score == 5){
      finishMatch(false);
    }
  }
})

const button_retry = document.querySelector('.retry');
button_retry.addEventListener('click', () => {
  player_score = 0;
  computer_score = 0;
  result = document.querySelector('.result');
  result.removeChild(result.firstChild);
  document.querySelector('.retry').setAttribute('style', 'visibility: hidden');
  document.querySelector('.score').innerText = "0-0";
  document.querySelector('.description').innerText = "";
})