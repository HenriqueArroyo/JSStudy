//Api nativa do navegador e permite buscar recursos externos (como apis, arquivos JSon, imagens, etc).
//Funciona baseada em Promises

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Erro:", error));

// Usando com async/await

async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data)
    } catch (erro) {
        console.error("Erro na requisição: ", erro);
    }
}

getPost();


// Fazendo Post com fetch
async function criarPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Meu novo post",
                body: "Conteúdo do Post",
                userId: 1
            })
        });

        const data = await response.json();
        console.log("Post criado: ", data);
    } catch (error) {
        console.error("Erro ao criar post:", erro);
    }
}

// criarPost();

