// Tipos básicos
let age: number = 5;
const firstName: String = "Felipe";
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

//Lista
const ids: number[] = [1,2,3,4,5];
const booleans: boolean[] = [true, false, true, false];
const names: String[] = ['Felipe', "Jane"];

// Tupla
const person: [number, string] = [1,  'aaa']

// Lista de tuplas
const people: [number, string][] = [
    [1, 'Jane'],
    [2, "Doe"],
];

// Intersections
const productId: string | number | boolean = false;

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}

const direction = Direction.Left

// Type Assertions
const productName: any = 'Boné';

// let itemId = productName as string;
let itemId = <string>productName;


console.log(direction);