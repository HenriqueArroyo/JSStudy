let idade = prompt("Digite sua idade: ");
let cor = prompt("Digite uma cor: ");
if (idade >=18) {
    console.log("Adulto");
} else if(idade>=13) {
    console.log("Adolescente");
} else {
    console.log("Criança")
}


switch (cor) {
    case "vermelho":
        console.log("Pare!!");
        break;
    case "amarelo":
    console.log("Atenção!!")
    break;
    case "verde":
    console.log("Vá em frente")
    break;
    default:
        break;
}