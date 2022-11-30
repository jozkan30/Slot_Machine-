const choices=[
1,2,3,4,5
]

let slotA= Math.floor(Math.random()* choices.length)
let slotB= Math.floor(Math.random()* choices.length)
let slotC= Math.floor(Math.random()* choices.length)

let result = [slotA,slotB,slotC];


if(slotA==slotB && slotA==slotC && slotB==slotC){
    console.log(`${result} you Won!`)
} else if(slotA==slotB || slotA==slotC || slotB==slotC){
    console.log([slotA, slotB, slotC] +  " Hey, Two in a row is good")
} else{
    console.log(`${result}`);
}


function getElements(){
document.getElementsByClassName("slotOne").innerHtml;

}
