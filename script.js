//let argent = prompt("Combien d'argent avez vous ?");
let argent = 500;
let nbActions = Math.floor((Math.random() * 100 + 2));
let data = ['0'];
let count = nbActions + 2;


for (let i = 0; i < count; i++) {
    let actions = Math.floor((Math.random() * 1500 + 1));
    data.push(actions);
    console.log(data);
    
}


