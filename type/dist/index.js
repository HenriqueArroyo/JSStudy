"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos básicos
let age = 5; // variável numérica (number)
const firstName = "Felipe"; // variável do tipo string (texto)
const isValid = true; // variável booleana (true/false)
let idk = 5; // tipo "any" (aceita qualquer valor, sem restrição)
idk = '12'; // agora a variável recebe uma string
idk = true; // e aqui recebe um boolean. "any" permite isso sem erro
// Lista (arrays tipados)
const ids = [1, 2, 3, 4, 5]; // array que só aceita números
const booleans = [true, false, true, false]; // array de valores booleanos
const names = ['Felipe', "Jane"]; // array de strings
// Tupla (array com número fixo de elementos e tipos definidos)
const person = [1, 'aaa'];
// Primeiro valor precisa ser number, segundo precisa ser string
// Lista de tuplas
const people = [
    [1, 'Jane'], // cada item é uma tupla [number, string]
    [2, "Doe"],
];
// Union types (interseções de tipos possíveis)
const productId = false;
// variável que pode ser string, number ou boolean
// Enum (estrutura para criar valores nomeados)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda"; // pode ter string também
})(Direction || (Direction = {}));
const direction = Direction.Left;
// aqui "direction" recebe o valor "Esquerda"
// Type Assertions (forçar/garantir o tipo de uma variável)
const productName = 'Boné';
// Duas formas possíveis (equivalentes):
// let itemId = productName as string;   // sintaxe mais usada hoje
let itemId = productName; // sintaxe antiga de assertion
// Exibe no console o valor atual da variável "direction"
console.log(direction); // saída: "Esquerda"
//# sourceMappingURL=index.js.map