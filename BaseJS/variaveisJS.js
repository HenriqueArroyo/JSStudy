// Var
if (true) {
    var x = 10; 
}

console.log(x); // escopo: 10 (a variável "vaza" para fora do bloco)

console.log(y); // hoisting: ela pode ser chamada antes de ser definida, sem erros
var y = "Henrique";

var nome = "Ana";
nome = "Lucas"; // Ela pode trocar o valor livremente


// Let

if (true) {
    let a = 20;
}

// console.log(a); // Escopo: Não existe fora do bloco

// console.log(b); // hoisting: Erro, a variavel ainda não foi declarada
let b = 30;

b = 15; // Pode mudar o valor livremente

// Const

// Possui mesmo escopo e hoisting do Let, porém não tem como alterar seu valor
const pi = 3.14;
// pi = 3.15; // TypeError

// Quando usar?
// Var: quase nunca
// Let: quando precisar mudar o valor ao longo do tempo
// Const: padrão para variaveis que não vão ser reatribuidas
