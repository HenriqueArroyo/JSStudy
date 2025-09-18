for (let i = 1; i <= 10 ; i++) {
    console.log(i);
}


let op = 10;

while (op>0) {
    console.log(op);
    op--;
}

frutas = ["Maçã", "Banana", "Uva", "Morango"];

for (let fruta of frutas) {
    console.log(fruta)
}

pessoa = {
    nome: "Henrique",
    idade: 19,
    cidade: "Limeira"
};

for (let p in pessoa) {
    console.log(p,pessoa[p])
}

var total = 0;

let numeros = [15,30,85,70]

for (let n of numeros) {
    total += n;
    
}

console.log(total);
