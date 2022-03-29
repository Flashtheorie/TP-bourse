//let argent = prompt("Combien d'argent avez vous ?");
let argent = 500;
let nbActions = Math.floor((Math.random() * 100 + 2));
let dataMatin = [];
let count = nbActions + 2;
let bestValueMatin;

for (let i = 0; i < count; i++) {
    let actions = Math.floor((Math.random() * 1500 + 1));
    dataMatin.push(actions);

    // Classe le tableau par ordre décroissant
    const sortDesc = (a, b) => b - a;
    dataMatin.sort(sortDesc);

    
    console.log(dataMatin);

    
}

bestValueMatin = dataMatin[0];
console.log("La meilleur valeur du matin est " + bestValueMatin);
