//CALLBACK
function cumprimentar(nome, callback) {
    console.log("\nOlá, "+ nome);
    callback(); // chamando a função recebida
}

function despedida() {
    console.log("Até logo!");
}

cumprimentar("Ana", despedida);
//Callback com função anonima
cumprimentar("Carlos", function(){
    console.log("Tenha um bom dia!");
});

console.log("Início");
//Calback no dia a dia
setTimeout(() => {
    console.log("Executou depois de 2 segundos!");
}, 2000);

console.log("Fim");


const numeros = [1,2,3,4];
//CALLBACK no forEach
numeros.forEach(function(n){
    console.log("Número: ", n);
});

//CALLback no Map
const dobrados = numeros.map(n => n*2);
console.log(dobrados);

