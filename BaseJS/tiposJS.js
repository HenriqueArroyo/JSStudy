// String
// Texto entre aspas ou crase

let nome = "Henrique";
console.log(nome.length);
console.log(nome.toUpperCase());

// Number
//Representa tanto inteiros quanto decimais
let idade = 25;
let altura = 1.75;
console.log(10 /0); // Infinity
console.log("abc" * 2) // NaN

// Boolean
// True ou False
let ativo = true;
let maiorDeIdade = idade>= 18;

// Null
// Ausência intencional de valor
let carro = null; //Sem valor definido

// Undefined
// Variavel declarada. mas sem valor atribuído
let x;
console.log(x);

// OBJETOS

// Object
let pessoa = {
    nome: "Ana",
    idade: 22
};

console.log(pessoa.nome);

// Array
// Lista ordenada começa no 0

let frutas = ["maçã", "banana", "uva"];
console.log(frutas[1]);
console.log(frutas.length)