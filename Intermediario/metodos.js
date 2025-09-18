// MAP
const numeros = [1,2,3,4,5];

//Cria um novo array, aplicando uma função nele (não altera o original)
const dobrados = numeros.map(n => n * 2);

console.log(dobrados);

//FILTER
const numeros2 = [10,15,20,25,30];

//Cria um novo array, apenas elementos que passam pela condição
const maioresQue20 = numeros2.filter(n => n > 20);

console.log(maioresQue20);

//REDUCE

//Reduz o array a um único valor(soma,produto,objet e etc)
const soma = numeros.reduce((acumulador, n) => acumulador + n, 0);

console.log(soma);

const letras = ["a", "b", "a", "c", "b", "a"];

const contagem = letras.reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
}, {});

console.log(contagem);

//FIND

const numeros3 = [5,10,15,20];

// Retorna o primeiro elemento que satisfaz a condição
// se não encontra fica indefinido
const encontrado = numeros3.find(n => n > 12);

console.log(encontrado);

//SOME 
// Retorna True se pelo menos um elemnto satisfaz a condição
const temPar = numeros.some(n => n % 2 == 0)

console.log(temPar);

//EVERY
//Retorna True se todos os elementos satisfazem a condição
const todosPares = numeros.every(n => n % 2 === 0);
console.log(todosPares);

