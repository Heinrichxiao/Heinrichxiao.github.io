// Finding the localstorage
if (!localStorage.getItem('coins')) {
    localStorage.setItem('coins', 0);
}
if (!localStorage.getItem('total')) {
    localStorage.setItem('total', 0);
}

// Making the variables
let firstNumber = Math.floor(Math.random()*100);
var fNS = firstNumber.toString();
let secondNumber = Math.floor(Math.random()*firstNumber);
var sNS = secondNumber.toString();
let problem = firstNumber - secondNumber;
var total = localStorage.getItem('total');
var num_coins = localStorage.getItem('coins');
var next = true;
var practiceMode = false;
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
const total_html = document.getElementById('total');
const accuracy_html = document.getElementById('accuracy');
const reset_html =  document.getElementById('reset');

if (total > 0) {
    // Printing the accuracy
    accuracy_html.innerHTML = `Acccuracy: ${Math.round(num_coins / total * 100)}%`;
}

// Printing the score for the game
coins.innerHTML = `Score: ` + localStorage.getItem('coins');

// Hiding the next question button
button.style.visibility = 'hidden';

// Printing the total number of question the user finished
total_html.innerHTML = `Total: ${total}`;

// Adding an event listener for the next question button
button.addEventListener('click', function(){
    coins.innerHTML = `Score: ` + localStorage.getItem('coins');
    console.log("clicked");
    checkFormat();

    button.style.visibility = 'hidden';
    play();
});
// For debugging the regrouping
console.log(fNS[fNS.length - 1]);
console.log(sNS[sNS.length - 1]);
console.log(fNS.length);

// Finding if there are regrouping and negative numbers
while (firstNumber - secondNumber < 0 ||
    fNS[fNS.length - 1] < sNS[sNS.length - 1] ||
    fNS.length != 2 ||
    sNS.length != 2) {
   fNS = firstNumber.toString();
   sNS = secondNumber.toString();
   firstNumber = Math.floor(Math.random()*100);
   secondNumber = Math.floor(Math.random()*100);
   fNS = firstNumber.toString();
   sNS = secondNumber.toString();
   problem = firstNumber - secondNumber;
}

// Adding an event listener to find the user clickng the check answer button
checkAnswer.addEventListener('click', function() {
    button.style.visibility = 'visible';
    total_html.innerHTML = `Total: ${total}`;
});

// Seeing if the person checked the answer
checkAnswer.addEventListener('click', function(){
    // Checking if the answer is correct
    if(answerInput.value == problem){
        
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="goodAnswer">${problem}</h1>
        <img width="100" src="answer-correct.svg" style="margin: none;">`;
        num_coins++;
        
    }else{
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="badanswer">${problem}</h1>
        <img width="100" src="answer-incorrect.svg" style="margin: none;">`;
    }
    
    // Printing everything
    total++;
    localStorage.setItem('coins', num_coins);
    localStorage.setItem('total', total);
    total_html.innerHTML = `Total: ${total}`;
    coins.innerHTML = `Score: ` + localStorage.getItem('coins');
    button.style.visibility = 'visible';
    accuracy_html.innerHTML = `Acccuracy: ${Math.round(num_coins / total * 100)}%`;
    
    clearAnswerInputField();

})

// Does this when playing the game
function play(){  
    total_html.innerHTML = `Total: ${total}`;  
    firstNumber = Math.floor(Math.random()*100);
    fNS = firstNumber.toString();
    secondNumber = Math.floor(Math.random()*100);
    sNS = secondNumber.toString();
    problem = firstNumber - secondNumber;
    playerAnswer.classList.remove('hidden');
    while (firstNumber - secondNumber < 0 ||
        fNS[fNS.length - 1] < sNS[sNS.length - 1] ||
        fNS[fNS.length - 2] < sNS[sNS.length - 2] || 
        fNS.length != 3 ||
        sNS.length != 3) {
       fNS = firstNumber.toString();
       sNS = secondNumber.toString();
       firstNumber = Math.floor(Math.random()*100);
       secondNumber = Math.floor(Math.random()*100);
       fNS = firstNumber.toString();
       sNS = secondNumber.toString();
       problem = firstNumber - secondNumber;
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