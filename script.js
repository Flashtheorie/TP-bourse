//let argent = prompt("Combien d'argent avez vous ?");
let argent = 500;
let nbActions = Math.floor((Math.random() * 100 + 2));
let dataMatin = [];
let count = nbActions + 2;
let bestValueMatin;

// Déclaration des variables du soir :
let dataSoir = [];
let bestValueSoir;

// Suivi des prix des actions le matin
for (let i = 0; i < count; i++) {
    let actions = Math.floor((Math.random() * 1500 + 1));
    dataMatin.push(actions);

    // Classe le tableau par ordre décroissant
    const sortDesc = (a, b) => b - a;
    dataMatin.sort(sortDesc);
    
    console.log(dataMatin);
}
bestValueMatin = dataMatin[0];

// Suivi des prix des actions le soir

for (let i = 0; i < count; i++) {
    let actions = Math.floor((Math.random() * 1500 + 1));
    dataSoir.push(actions);

    // Classe le tableau par ordre décroissant
    const sortDesc = (a, b) => b - a;
    dataSoir.sort(sortDesc);
    
    console.log(dataSoir);
}

bestValueSoir = dataSoir[0];


console.log("La meilleur valeur du matin est " + bestValueMatin);
console.log("La meilleur valeur du soir est " + bestValueSoir);


if (bestValueMatin > bestValueSoir){
    let difference = bestValueMatin - bestValueSoir;
    console.log("Aujourd'hui, ce n'est pas intéressant d'acheter une action. Vous allez perdre " + difference +"€")
}

if (bestValueSoir > bestValueMatin){
    let difference = bestValueSoir - bestValueMatin;
    console.log("Aujourd'hui, vous allez gagner " + difference +"€")
}