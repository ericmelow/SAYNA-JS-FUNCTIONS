let stringSize=function(chaine){
if (chaine.length<5){
    return "small";
}
if (chaine.length>5){
    return "large";
}
if (chaine.length=5){
    return "large";
}

}

console.log(stringSize("cat")) ; // 'small' (petit)
console.log(stringSize("bell")) ; // 'small' (petit)
console.log(stringSize("ready")) ; // 'medium' (moyen)
console.log(stringSize("shirt")) ; // 'medium' (moyen)
console.log(stringSize("shallow")) ; // 'large' (grand)
console.log(stringSize("intelligence")) ; // 'large' (grand)
