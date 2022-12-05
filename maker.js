let questions=[
"What is the largest country in the world based on the land area?",
"What is the oldest inhabited city in the world?",
"How many moons does Saturn have?",
"How many legs does a lobster have?"]

let answers=[
"Russia",
"Dammascus",
"82",
"10"]

function  getElements(id){
 return document.getElementById(id)
}

function ranques(){
let ran = Math.floor(Math.random()*questions.length)
let dom = questions[ran];
return dom
}