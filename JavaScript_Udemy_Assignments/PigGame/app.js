/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//1.Variable Declaration
var scores,activePlayer,roundScore,isGameInProgress;
init();

//2.DOM Manuplation
//2.1 Setting values to DOM elements.Initialyy setting all to zero
document.querySelector('#score-0').textContent = 0; 
document.querySelector('#current-0').textContent = 0;
document.querySelector('#score-1').textContent = 0; 
document.querySelector('#current-1').textContent = 0;

//this is how we can use html tags with dom
//document.querySelector('#current-0').innerHTML = '<em>'+dice+'</em>'; 

//2.2 Reading values from DOM elements
//var currentDiceValue = document.querySelector('#score-0').textContent;
//console.log(currentDiceValue);

//2.3 Handling css of the dom element. Here class name 'dice' is accessed with dot '.' inside query selector
//At begining set the dice display to none
document.querySelector('.dice').style.display =  'none';

//3 Adding event lister to roll dice buton
document.querySelector('.btn-roll').addEventListener('click',function() {
    //this is anonynous function
    if(isGameInProgress)
    { 
    //1.generate random number
    var dice = Math.floor(Math.random() * 6 ) + 1;

    //2.Display dice image accordingly
    document.querySelector('.dice').src = 'dice-'+ dice +'.png';
    document.querySelector('.dice').style.display =  'block';

    //3.Update scores
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }
    else{        
        switchPlayer();
        }
    }
})

//4.Once hold is clicked , add score to hold array , and then switch player
document.querySelector('.btn-hold').addEventListener('click',function(){

    if (isGameInProgress)
    {
    //1. Add score to hold and display on ui
    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 20)
    {
        document.querySelector('#name-'+activePlayer).textContent = 'You win!';     
        document.querySelector('.dice').style.display =  'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');        
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        isGameInProgress=false;
    }
    else{
    switchPlayer();
    }
}
})

//5. When 'NewGame' is clicked, initialise all variables and set to its initial state
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    isGameInProgress= true;
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0 ;
    document.querySelector('.dice').style.display =  'none';
    document.querySelector('#score-0').textContent = 0; 
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0; 
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#name-0').textContent='Adam';
    document.querySelector('#name-1').textContent='James';    
    document.querySelector('.player-0-panel').classList.remove('winner');  
    document.querySelector('.player-1-panel').classList.remove('winner');       
    document.querySelector('.player-0-panel').classList.remove('active');         
    document.querySelector('.player-1-panel').classList.remove('active');     
    document.querySelector('.player-0-panel').classList.add('active');

}

//switch Player function
function switchPlayer(){    
//1.css change to show current active player
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

//another way of adding/removing the class
//document.querySelector('player-0-panel').classList.remove('active');
//document.querySelector('player-1-panel').classList.add('active');

//2. Show 0 on UI of both players
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;

//3.switch active player and set current round scores to zero of both player
activePlayer = activePlayer === 0 ? 1: 0;
roundScore=0;

//4.Hide the dice 
document.querySelector('.dice').style.display =  'none';
}
