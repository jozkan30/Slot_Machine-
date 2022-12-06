// possible choices
const choices=[
   ' 🍌',
   '🌶 ',
    '🎩',

];

let wallet={
money:-5 };

// A random emjoi from the array 
function getRandomNumber(){
let ranNum= choices[Math.floor(Math.random()* choices.length)];
return ranNum;
}

getRandomNumber()
// A function for grabing elements
function getElements(id){
return document.getElementById(id)
}


// Main function: 
function wheel(){

let first = getElements('0');
let second = getElements('1');
let third = getElements('2');
let win = getElements('win');

let slotA = getRandomNumber();
let slotB = getRandomNumber();
let slotC = getRandomNumber()


first.innerHTML= `${slotA}`;
second.innerHTML= `${slotB}`;
third.innerHTML= `${slotC}`;

//  DOM references &  outcomes that are posible: 3 match | 2 match | none match 
if(slotA===slotB && slotA===slotC && slotB===slotC){
    document.getElementById('result').innerHTML="You win";

    document.getElementById('win').innerHTML=wallet.money += 10

    
}else if(slotA===slotB ||slotA===slotC || slotB=== slotC)
{
    document.getElementById('result').innerHTML="Two out of Three!" ; 

    document.getElementById('win').innerHTML=wallet.money += 5;


} else{
    document.getElementById('result').innerHTML="You Lost. Try Again";
    
    
    document.getElementById('win').innerHTML=wallet.money -= 5;
}
}

wheel()


// resets slots back to '?'
function reset(){
 let stopA = getElements('0')
 let stopB = getElements('1')
 let stopC = getElements('2')
 let stopD = getElements('result')
 let stopE = getElements('win')
 
 stopA.innerHTML = "?";
 stopB.innerHTML = "?";
 stopC.innerHTML = "?";
 stopD.innerHTML= " "
 stopE.innerHTML= wallet.money * 0
}
reset()




