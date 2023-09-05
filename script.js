function computerChoice() {
  //Every tool is asigned to a value, Rock = 0, Paper = 1, Scissor = 2//
  return Math.floor(Math.random() * 3);
}

//2, 1 and 0 represent win draw and lose respectively//
//when the player chooses paper or scissors and wins, player - computer == 1, because (1,0) is a win and (2,1) is a win//
//the only other value that wins is (0,2), that explains the firts if//
function playround(player, computer) {
  if(player - computer == 1 || (player == 0 && computer == 2)){
    const display_result = document.querySelector('.player_score');
    let update_result = Number(`${display_result.innerText}`) + 1;
    display_result.innerText = update_result;
  } else if(player == computer){
    console.log("draw");
  } else {
    const display_result = document.querySelector('.computer_score');
    let update_result = Number(`${display_result.innerText}`) + 1;
    display_result.innerText = update_result;
  }

  //--------------------------------Finish the match and show result-------------------------------//
  if(Number(`${document.querySelector('.player_score').innerText}`) == 5){
    while(document.querySelector('.result').firstChild){
      document.querySelector('.result').removeChild(document.querySelector('.result').lastChild);
    }
    let win = document.createElement('p');
    win.innerText = "You Win";
    document.querySelector('.result').appendChild(win);
  }
  if(Number(`${document.querySelector('.computer_score').innerText}`) == 5){
    while(document.querySelector('.result').firstChild){
      document.querySelector('.result').removeChild(document.querySelector('.result').lastChild);
    }
    let win = document.createElement('p');
    win.innerText = "You Lose";
    document.querySelector('.result').appendChild(win);
  }
}

const button_rock = document.querySelector('.rock');
button_rock.addEventListener('click', () => {
  let com_choice = computerChoice();
  playround(0, com_choice);
});

const button_paper = document.querySelector('.paper');
button_paper.addEventListener('click', () => {
  playround(1, computerChoice());
})

const button_scissors = document.querySelector('.scissors');
button_scissors.addEventListener('click', () => {
  playround(2, computerChoice());
})