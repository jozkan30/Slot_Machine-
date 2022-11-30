// array of possible choices 
const choices=[
0,1,2,3,4
]
console.log()
/// There random events for the three slots of the machine that choose from 5 posible choices 
let slotA= Math.floor(Math.random()* choices.length)
let slotB= Math.floor(Math.random()* choices.length)
let slotC= Math.floor(Math.random()* choices.length)

let result = [slotA,slotB,slotC];
console.log(result); 


/// Outcomes that are posible: 3 match | 2 match | none match 
function outComes(){
if(slotA==slotB && slotA==slotC && slotB==slotC){
    return (`${result} you Won!`)
} else if(slotA==slotB || slotA==slotC || slotB==slotC){
     return [slotA, slotB, slotC] +  " Hey, Two in a row is good"
} else{
     return `${result}`
}}
outComes();



// DOM references:
function addElements(){
firstOutCome= document.getElementById('0').innerHTML=slotA;
secondOutCome= document.getElementById('1').innerHTML=slotB;
thirdOutCome= document.getElementById('2').innerHTML=slotC;

if(slotA==slotB && slotA==slotC && slotB==slotC){
    return document.getElementById('result').innerHTML="You Won"
}else if(slotA==slotB || slotA==slotC || slotB==slotC){
    return document.getElementById('result').innerHTML= "Two out of three is good"
}else{
    return document.getElementById('result').innerHTML=" You Lose. Try again."
}}
addElements()


