const usuario = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

//Sem destructuring
// const nome = usuario.nome;
// const idade = usuario.idade;

//Com destructuring
// Ela extrai apenas os atributos entre chaves
const {nome, idade } = usuario;

console.log(nome);
console.log(idade);

// Voce pode renomear as variaveis
const {nome: primeiroNome, idade: anos} = usuario;

console.log(primeiroNome);
console.log(anos);

// Se a propriedade não existe, pode definir valor padrão
const { sobrenome = "Silva"} = usuario;

console.log(sobrenome);

//Exemplo com arrays
const numeros = [10, 20, 30];

// a desestruturação em arrays é baseada na posição
const [x,y] = numeros;

console.log(x);
console.log(y);

// Uso em Funções

function exibirUsuario({nome, idade}) {
    console.log(`${nome} tem ${idade} anos.`);
}

exibirUsuario(usuario);


