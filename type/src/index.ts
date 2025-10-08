// Tipos básicos
let age: number = 5; // variável numérica (number)
const firstName: String = "Felipe"; // variável do tipo string (texto)
const isValid: boolean = true; // variável booleana (true/false)
let idk: any = 5; // tipo "any" (aceita qualquer valor, sem restrição)

idk = '12'; // agora a variável recebe uma string
idk = true; // e aqui recebe um boolean. "any" permite isso sem erro

// Lista (arrays tipados)
const ids: number[] = [1,2,3,4,5]; // array que só aceita números
const booleans: boolean[] = [true, false, true, false]; // array de valores booleanos
const names: String[] = ['Felipe', "Jane"]; // array de strings

// Tupla (array com número fixo de elementos e tipos definidos)
const person: [number, string] = [1,  'aaa']; 
// Primeiro valor precisa ser number, segundo precisa ser string

// Lista de tuplas
const people: [number, string][] = [
    [1, 'Jane'],  // cada item é uma tupla [number, string]
    [2, "Doe"],
];

// Union types (interseções de tipos possíveis)
const productId: string | number | boolean = false; 
// variável que pode ser string, number ou boolean

// Enum (estrutura para criar valores nomeados)
enum Direction {
    Up = 1,          // atribui valor numérico 1
    Down = 2,        // atribui valor numérico 2
    Left = 'Esquerda'// pode ter string também
}

const direction = Direction.Left; 
// aqui "direction" recebe o valor "Esquerda"

// Type Assertions (forçar/garantir o tipo de uma variável)
const productName: any = 'Boné';

// Duas formas possíveis (equivalentes):
// let itemId = productName as string;   // sintaxe mais usada hoje
let itemId = <string>productName;       // sintaxe antiga de assertion

// Exibe no console o valor atual da variável "direction"
console.log(direction); // saída: "Esquerda"


