
function criarGerenciarUsuario() {
    let usuario = [];
    let contador = 0;

    return {
        adicionar(nome, idade, email) {
            usuario.push({nome, idade, email})
            contador++
        },
        removerNome(nome) {
            usuario = usuario.filter(u => u.nome !== nome);
        },
        listarUsuarios() {
          return usuario;
        },
        qtdUsuarios(){
           return contador;
        }
    };

}

const sistema = criarGerenciarUsuario();
sistema.adicionar("Henrique", 19, "info@engebag.com.br");
sistema.adicionar("Robson", 42, "comercial@engebag.com.br");

console.log(sistema.listarUsuarios());
console.log(sistema.qtdUsuarios())


