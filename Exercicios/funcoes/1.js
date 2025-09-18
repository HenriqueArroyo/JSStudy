function soma(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
};

console.log(soma(10,20));

const multiplicar = function(a,b) {
    return a * b;
};

console.log(multiplicar(5,6));

const saudacao = (nome = "Visitante") => {console.log("Olá,", nome)};

console.log(saudacao("Henrique"));



