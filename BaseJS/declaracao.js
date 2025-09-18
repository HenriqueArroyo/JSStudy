// Função declaração

console.log(soma(2,3)); // Sofre hoisting -> pode ser chamada antes de ser declarada

function soma(a,b) {
    return a+b;
};

// Função Expressão

const subtrai = function (a, b) {
    return a - b;
};

console.log(subtrai(5,2)); // Não sofre hoisting -> só pode ser usada depois da criação


// Função com Arrow Function

const multiplica = (a,b) => a*b; // sintaxe reduzida

console.log(multiplica(3,4)); // também não sofre hoisting




