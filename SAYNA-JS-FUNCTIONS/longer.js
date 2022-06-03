let longer = function(chaine1, chaine2){
    if (chaine1.length > chaine2.length){
        return chaine1;
    }
    else if(chaine1.length < chaine2.length){
        return chaine2;
    }
    else return chaine1;
}

console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "durable".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)
