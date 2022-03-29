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

    // Classe le tableau par ordre croissant le matin
    // dataMatin.sort();
    
    console.log(dataMatin);
    bestValueMatin = Math.min(dataMatin[i]);
}


// Suivi des prix des actions le soir

for (let i = 0; i < count; i++) {
    let actions = Math.floor((Math.random() * 1500 + 1));
    dataSoir.push(actions);

    // Classe le tableau par ordre décroissant le soir
    const sortDesc = (a, b) => b - a;
    dataSoir.sort(sortDesc);
    
    //document.write(dataSoir);
}

bestValueSoir = dataSoir[0];


document.write("La valeur minimum d'une action ce matin est " + bestValueMatin + "€<br>");
document.write("La valeur maximum d'une action de ce soir est " + bestValueSoir + "€<br>");


if (bestValueMatin > bestValueSoir){
    let difference = bestValueMatin - bestValueSoir;
    document.write("Aujourd'hui, ce n'est pas intéressant d'acheter une action.<br> Vous allez perdre " + difference +"€")
}

if (bestValueSoir > bestValueMatin){
    let difference = bestValueSoir - bestValueMatin;
    document.write("Aujourd'hui, vous allez gagner " + difference +"€")
}