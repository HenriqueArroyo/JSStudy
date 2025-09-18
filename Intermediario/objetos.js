// Objeto básico
const pessoa = {
    nome: "João",
    idade: 25,
    ativo: true
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);


// Objeto aninhados, com outros objetos dentro

const usuario = {
    nome: "Maria",
    endereco: {
        rua: "Rua A",
        numero: 100
    }
};

console.log(usuario.endereco.rua)

// Funções dentro de objetos
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ligar: function() {
        console.log("O carro está ligado!")
    }
}

carro.ligar();

// Com arrow function
const carro2 = {
    marca: "Honda",
    acelerar: () => console.log("Vruuuum!!")
};

carro2.acelerar();

// Adicionar, alterar e remover propriedades
const produto = {
    nome: "Notebook",
    preco: 2500
};

//Adicionando propriedades
produto.marca = "Dell";

// Alterando propriedades
produto.preco = 2300;

// Removendo propriedades
delete produto.marca;

console.log(produto);

// Objetos dinamicos

const chave = "email";

const user = {
    nome: "Ana",
    [chave]: "ana@email.com"
};

console.log(user.email);


//objetos dentro de arrays
const people = [
    {id: 1, nome: "Lucas"},
    {id: 2, nome: "Beatriz"}
];

console.log(people[1].nome)

