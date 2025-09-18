// Prototype
//modelo base onde objetos conseguem herdar métodos e propriedades
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Pessoa.prototype.falar = function () {
    console.log(`Olá, meu nome é ${this.nome}`);
};

const joao = new Pessoa("João", 25);
joao.falar();

// Class em JS

class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}

const maria = new Usuario("Maria", 30);
maria.falar();

//Herança com class

class Animal{
    constructor(nome) {
        this.nome = nome;
    }
    fazerSom() {
        console.log("Som genérico...");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au au!")
    }
}

const rex = new Cachorro("Rex");
rex.fazerSom();

