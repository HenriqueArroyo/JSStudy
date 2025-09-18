// Parâmetro Padrão

// sem parâmetros padrão:
function saudacao(nome) {
    console.log("Olá, " + nome);
};

saudacao(); // Olá, undefined // Se não houver valor, será undefined

// com parâmetros padrão:
function saudacao(nome = "Visitante") {
    console.log("Olá, " + nome);
};

saudacao();  // Olá, Visitante
saudacao("Henrique"); // Olá, Henrique 


// REST PARAMETERS
function soma(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
};

console.log(soma(1,2,3));
console.log(soma(5,10,15,20));

// MISTURA DE PARAMETROS

function pedido(cliente = "Anônimo", ...itens) {
    console.log("Cliente: ", cliente);
    console.log("Itens: ", itens);
};

pedido("Maria", "Pizza", "Suco", "Sobremesa");

