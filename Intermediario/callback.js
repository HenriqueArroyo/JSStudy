//CALLBACK
function cumprimentar(nome, callback) {
    console.log("\nOlá, "+ nome);
    callback(); // chamando a função recebida
}

function despedida() {
    console.log("Até logo!");
}

cumprimentar("Ana", despedida);
cumprimentar("Carlos", function(){
    console.log("Tenha um bom dia!");
});

console.log("Início");

setTimeout(() => {
    console.log("Executou depois de 2 segundos!");
}, 2000);

console.log("Fim");


const numeros = [1,2,3,4];

numeros.forEach(function(n){
    console.log("Número: ", n);
});

const dobrados = numeros.map(n => n*2);
console.log(dobrados);