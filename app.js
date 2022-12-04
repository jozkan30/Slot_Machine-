// possible choices
const choices=[
   ' 🍌',
   '🌶 ',
    '🎩',

];


function getRandomNumber(){
let ranNum= choices[Math.floor(Math.random()* choices.length)];
return ranNum;
}
getRandomNumber()

function getElements(id){
return document.getElementById(id)
}

function wheel(){

let first = getElements('0');
let second = getElements('1');
let third = getElements('2');


let slotA = getRandomNumber();
let slotB = getRandomNumber();
let slotC = getRandomNumber()


first.innerHTML= `${slotA}`;
second.innerHTML= `${slotB}`;
third.innerHTML= `${slotC}`;



//  DOM references &  outcomes that are posible: 3 match | 2 match | none match 
if(slotA===slotB && slotA===slotC && slotB===slotC){
    document.getElementById('result').innerHTML="You win";
    

   
    
}else if(slotA===slotB ||slotA===slotC || slotB=== slotC)
{
    document.getElementById('result').innerHTML="Two out of Three!" ; 
    

} else{
    document.getElementById('result').innerHTML="You Lost. Try Again";
    

}
}
wheel()


// resets slots back to '?'
function reset(){
 let stopA = getElements('0')
 let stopB = getElements('1')
 let stopC = getElements('2')
 let stopD = getElements('result')
 
 stopA.innerHTML = "?";
 stopB.innerHTML = "?";
 stopC.innerHTML = "?";
 stopD.innerHTML= " "
}
reset()

