const alunos = [
    {id: 1, nome: "Ana", nota: 8.5, bolsista: true},
    {id: 2, nome: "Carlos", nota: 6.0, bolsista: false},
    {id: 3, nome: "Marina", nota: 9.2, bolsista: true}
];

console.log("Percorrendo a lista com For: ")
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
}

console.log("\nPercorrendo nomes com For Of:")
for (let a of alunos) {
    console.log(a.nome);
}

console.log("\nAlunos aprovados com If/else:")
for (let a of alunos) {
    if (a.nota >= 7) {
        console.log(a);
    }
}

function calcularMedia() {
    console.log("\nMédia notas com função:")
    total = 0;
    for (let a of alunos) {
        total += a.nota;
    }
    media = total / alunos.length;
    mediaFormatada = 
    console.log("Média das notas é : ",media)
}

calcularMedia();


const exibirInfo = () => {
    console.log("\nInformações formatadas:")
    for (const a of alunos) {
    if (a.bolsista) {
        console.log("Aluno: ", a.nome," | Nota: ", a.nota, " | Ele é bolsista!")

    } else {
        console.log("Aluno: ", a.nome," | Nota: ", a.nota, " | Ele não é bolsista!")
    }

}}

exibirInfo();


const alunosBolsistas = alunos.filter(a => a.bolsista === true);
console.log("\nAlunos bolsistas(Filter):");
for (const a of alunosBolsistas) {
    console.log(a)
}

const alunosNotaAdicionada = alunos.map(a => a.nota + 1);
console.log("\nAlunos com mais 1 ponto(Map):")
for (const a of alunosNotaAdicionada) {
    console.log(a)
}

const todasNotas = alunos.reduce((acumulador, a) => acumulador + a.nota, 0);
console.log("\nAluno com reduce total: ", todasNotas);

const procurarAluno = (id) => alunos.find(a => a.id === id);
console.log("\nProcurar por ID 1: ", procurarAluno(1));

const umAlunoReprovou = alunos.some(a => a.nota <= 7);
console.log("\nAlgum aluno reprovou? ", umAlunoReprovou);

const todosAlunosNotaZero = alunos.every(a => a.nota > 0);
console.log("\nTodos alunos tem nota maior que 0? ", todosAlunosNotaZero);

class Aluno {
    constructor(nome, nota, bolsista) {
        this.nome = nome;
        this.nota = nota;
        this.bolsista = bolsista;
    }
    status(nota) {
        if (nota>=7) {
            console.log("Aprovado!!");
        } else {
            console.log("Reprovado!!");
        }
    }
    ajustarNota(percentual) {
        this.nota = this.nota - (this.nota * percentual / 100);
    }

}

const al = new Aluno("Henrique", 8, true);

