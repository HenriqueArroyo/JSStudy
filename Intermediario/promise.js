//Promise
//Ela é um contrato que promete te dar um resultado no futuro(positivo ou negativo)

//3 estados dela
// 1. pending(pendente) -> ainda em execução
// 2. fulfilled(resolvida) -> operação concluída com sucesso
// 3. rejected(rejeitada) -> operação falhou

// resolve retorna o resultado da promise / reject retorna o erro da promise
const minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true;

    if (sucesso) {
        resolve("Deu certo!!"); //sucesso
    } else{
        reject("Algo deu errado..."); //erro
    }
})

minhaPromise
.then(resultado => console.log("Sucesso: ", resultado)) // define o bloco executado mediante o cumprimento da promise
.catch(erro => console.log("Erro: ", erro)) // define o bloco executado mediante a rejeição da promise
.finally(()=> console.log("Finalizou a execução")); //executa sempre


//Exemplo com atraso (simulando uma API)
function buscarDados(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({usuario: "Ana", idade: 25});
        }, 2000);
    });
}

buscarDados()
.then(dados=> console.log("Usuário:",dados))
.catch(err => console.log("Erro: ", err));