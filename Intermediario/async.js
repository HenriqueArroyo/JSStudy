
//Sem Async/await
function pegarDados() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Dados recebidos!"), 2000);
    });
  }
  
// Com Async/await
//Async transforma uma função em assíncrona, ou seja, essa função sempre retorna uma Promise
async function buscarDados() {
    // await Pausa a execução até que a Promise seja resolvida ou rejeitada (só funciona em funções declaradas com async)
    const resultado = await pegarDados();
    console.log(resultado);
}

buscarDados();

//Executar promises ao mesmo tempo
function tarefa1() {
    return new Promise((resolve) => setTimeout(() => resolve("Tarefa 1 Concluída"), 2000));
}
function tarefa2() {
    return new Promise((resolve) => setTimeout(() => resolve("Tarefa 2 Concluída"), 2000));
}

async function executar() {
    //Executa em paralelo
    const [res1, res2] = await Promise.all([tarefa1(), tarefa2()]);
    console.log(res1, res2);
}

executar();