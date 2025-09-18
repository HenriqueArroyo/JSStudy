//THIS

// é uma palavra-chave especial que referencia o objeto execuntado naquele momento

//Dentro de um objeto
const pessoa = {
    nome: "Lucas",
    falar: function() {
        console.log(this.nome); //this -> pessoa
    }
};

pessoa.falar();

// Fora de um objeto
function falar() {
    console.log(this);
}

falar();

//Dentro de uma função em objeto
const usuario = {
    nome: "Ana",
    apresentar: function () {
        console.log(`Oi, sou ${this.nome}`);
    }
};

usuario.apresentar();

//bind()
function correr() {
    console.log(this.nome);
};

const people = {nome: "Carlos"};

const correrComBind = correr.bind(people);
correrComBind();

//call()
function comprimentar(saudacao) {
    console.log(`${saudacao}, meu nome é ${this.nome}`);
}

const maluco = {nome: "João"};

comprimentar.call(maluco, "Olá");

// Apply()

function gritar(saudacao, despedida) {
    console.log(`${saudacao}, meu nome é ${this.nome}. ${despedida}`);
}

const p = {nome:"Beatriz"};

gritar.apply(p, ["Oi", "Tchau"]);

