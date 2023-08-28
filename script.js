function computerChoice() {
  //Every tool is asigned to a value, Rock = 0, Papers = 1, Scissor = 2//
  num = Math.floor(Math.random() * 3);
  if(num == 0){
    return "rock";
  } else if( num == 1){
    return "papers";
  }
  return "scissors";
}

//Converts a tool to its numerical value//
function toolToNumber(tool) {
  if(tool == "rock"){
    return 0;
  } else if(tool == "papers"){
    return 1;
  } else if(tool == "scissors"){
    return 2;
  }
}

//2, 1 and 0 represent win draw and lose respectively//
//when the player chooses papers or scissors and wins, player - computer == 1, because (1,0) is a win and (2,1) is a win//
//the only other value that wins is (0,2), that explains the firts if//
function playround(player, computer) {
  if(player - computer == 1 || (player == 0 && computer == 2)){
    return(2);
  } else if(player == computer){
    return(1);
  } else {
    return(0);
  }
}

//Returns true is the Tool is Valid, false if not//
function validTool(tool){
  return (tool == "rock" || tool == "papers" || tool == "scissors");
}

function play() {
  let wins = 0, loses = 0, result = 0;
  let tool = "", com_tool = "";
  //First to five wins//
  while(loses < 5 && wins < 5){
    tool = prompt("Select your tool").toLowerCase();
    //if the tool is not an option, we make them choose another untill they choose a valid option//
    while(!validTool(tool)){
        console.error(`Not a valid tool, select 'rock', 'papers' or 'scissors'`);
        tool = prompt("Select your tool").toLowerCase();
    }
    com_tool = computerChoice();
    result = playround(toolToNumber(tool), toolToNumber(com_tool));
    if(result == 2){
      wins++;
      console.log(`You win this round, ${tool} beats ${com_tool}`);
    } else if (result == 1){
      console.log(`Draw, both have chosen ${tool}`);
    } else {
      loses++;
      console.log(`You lost this round, ${com_tool} beats ${tool}`);
    }
    console.log(`the score is ${wins} to ${loses}`);
  }
  if(wins == 5){
    console.log(`You Won!!!`);
  } else {
    console.log(`You lost :(`)
  }
}
