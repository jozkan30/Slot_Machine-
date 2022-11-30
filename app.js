// array of possible choices 
const choices=[
1,2,3,4,5
]

/// There random events for the three slots of the machine that choose from 5 posible choices 
let slotA= Math.floor(Math.random()* choices.length)
let slotB= Math.floor(Math.random()* choices.length)
let slotC= Math.floor(Math.random()* choices.length)

let result = [slotA,slotB,slotC];
console.log(result); 


/// Outcomes that are posible: 3 match | 2 match | none match 
function outcomes(){
if(slotA==slotB && slotA==slotC && slotB==slotC){
    return (`${result} you Won!`)
} else if(slotA==slotB || slotA==slotC || slotB==slotC){
     return [slotA, slotB, slotC] +  " Hey, Two in a row is good"
} else{
     return `${result}`
}}

// DOM references:

const firstOutCome= document.getElementById('1').innerHTML="A new Word";

console.log(firstOutCome);