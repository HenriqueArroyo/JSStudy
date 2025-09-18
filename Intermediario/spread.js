//SPREAD com arrays
const numeros = [1,2,3];
// Ele copia os valores do array original citado
const novosNumeros = [...numeros, 4,5];

console.log(novosNumeros);

//SPREAD com OBJETOS
const pessoa = {nome: "Lucas", idade: 30};
const novaPessoa = {...pessoa, cidade: "São Paulo"};

console.log(novaPessoa);

