
let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
score = scoreStr? JSON.parse(scoreStr):{
    won:'0',
    loss:'0',
    tied:'0',
};

score.ScoreBoard = function(){
    return `won:${score.won} loss:${score.loss} tied:${score.tied}`;
 }
 showResult();
}
function ComputerChoice(){
let randomNumber = Math.random() *3;
if( randomNumber<=1){
    return 'bat';
} else if(randomNumber<=2){
    return 'ball';

}else{
    return 'stump';
}
} 


function Result(userMove , computerChoice){
    if( userMove==='bat'){
       if(computerChoice ==='ball'){
           score.won++;
            return 'You won';
        }else if(computerChoice ==='stump'){
            score.loss++;
            return 'computer won';

        }
        else{
            score.tied++;
            return 'Game tied';
        }
    }else if(userMove==='ball'){
        if(computerChoice ==='bat'){
            score.loss++;
            return 'Computer Won';
        }else if(computerChoice ==='stump'){
            score.won++;
            return 'You Won';
        }
        else{
            score.tied++;
            return 'Game Tied';
        }
    }else{
        if(computerChoice ==='bat'){
            score.won++;
            return 'You won';
        }else if(computerChoice ==='ball'){
            score.loss++;
            return 'Computer won';
        }
        else{
            score.tied++;
            return 'Game Tied';
        }
    }
}

function showResult(userMove,computerChoice,result){
    localStorage.setItem('Score',JSON.stringify(score));

    document.querySelector('.usermove').innerText = userMove?`you have chosen ${userMove}`: ' select your move';
    document.querySelector('.computerMove').innerText = computerChoice?`Computer have chosen ${computerChoice}`:'Computer Move :';
    document.querySelector('.result').innerText = result||'Result :' ;
    document.querySelector('.score').innerText =`score :${score.ScoreBoard()}` ;

 

}
 
