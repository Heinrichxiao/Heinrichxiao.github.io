if (!localStorage.getItem('coins')) {
    localStorage.setItem('coins', 1);
}

let firstNumber = Math.floor(Math.random()*1000);
let firstNumStr = firstNumber.toString();
let secondNumber = Math.floor(Math.random()*1000);
let secondNumStr = secondNumber.toString();
let problem = firstNumber - secondNumber;
const topNumber = document.getElementById("tNumber");
const topNumberContainer = document.querySelector('.topNumber');
const bottomNumber = document.getElementById("bNumber");
const bottomNumberContainer = document.querySelector('.bottomNumber')
const answer = document.getElementById("answer");
const output = document.querySelector('.output');
const playerAnswer = document.querySelector('.playerAnswer');
const button = document.querySelector('.button');
const answerInput = document.getElementById("answerInput");
const checkAnswer = document.getElementById("checkAnswer");
const coins = document.querySelector('.coins');
var num_coins = localStorage.getItem('coins');

console.log(firstNumStr + secondNumStr);

coins.innerHTML = `Coins: ` + localStorage.getItem('coins');

button.addEventListener('click', function(){
    coins.innerHTML = `Coins: ` + localStorage.getItem('coins');
    console.log("clicked");
    checkFormat();
    
    firstNumber = Math.floor(Math.random()*1000);
    secondNumber = Math.floor(Math.random()*1000);
    problem = firstNumber - secondNumber;
    playerAnswer.classList.remove('hidden');
    play();
});

while (firstNumber - secondNumber < 0) {
    firstNumber = Math.floor(Math.random()*1000);
    secondNumber = Math.floor(Math.random()*1000);
    problem = firstNumber - secondNumber
}

checkAnswer.addEventListener('click', function(){
    if(answerInput.value == problem){
        
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="goodAnswer">${problem}</h1>`;
        num_coins++;
        
    }else{
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="badanswer">${problem}</h1>`;
    }
    
    localStorage.setItem('coins', num_coins);
    coins.innerHTML = `Coins: ` + localStorage.getItem('coins');
    
    clearAnswerInputField();

})

function play(){
    while (firstNumber - secondNumber < 0) {
        firstNumber = Math.floor(Math.random()*1000);
        secondNumber = Math.floor(Math.random()*1000);
        problem = firstNumber - secondNumber
    }
    output.classList.add('hidden');
    checkFormat()
    
    topNumberContainer.innerHTML = `<h1 id="tNumber">${firstNumber}</h1>` ;
    bottomNumberContainer.innerHTML = `<h1 id="bNumber">${secondNumber}</h1>`; 
    
}


function checkFormat() {
    if (firstNumber < 10 && !topNumberContainer.classList.contains('singleDigit')) {
        topNumberContainer.classList.add('singleDigit');
    }
    if(firstNumber > 9 && topNumberContainer.classList.contains('singleDigit')){
        topNumberContainer.classList.remove('singleDigit');
    }
    if (secondNumber < 10) {
        bottomNumberContainer.classList.add('singleDigit');
    }
    if(secondNumber > 9){
        bottomNumberContainer.classList.remove('singleDigit');
    }
}

function clearAnswerInputField(){
    answerInput.value = "";    
}

play();
