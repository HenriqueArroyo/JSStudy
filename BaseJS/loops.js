//For  (inicialização; condição; incremento) 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While

let a = 0;
while (a < 3) {
    console.log("Contando: ", a);
    a++;
}


// For...of
// Percorre valores de arrayas, strings ou oubjetos iteráveis

let frutas = ["maçã", "banana", "uva"];

for (let fruta of frutas) {
    console.log(fruta)
}

//For...in
// Percorre as chaves (indices ou propriedades) de um objeto/array
let pessoa = {nome: "Ana", idade: 25};

for (let chave in pessoa) {
  console.log(chave, "=", pessoa[chave]);
}


