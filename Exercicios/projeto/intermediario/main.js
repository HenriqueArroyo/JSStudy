
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, promocao: true },
    { id: 2, nome: "Mouse", preco: 100, promocao: false },
    { id: 3, nome: "Teclado", preco: 200, promocao: true }
  ];
  
  console.log("📌 Listando produtos com for:");
  for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
  }
  
  console.log("\n📌 Listando produtos com for...of:");
  for (const produto of produtos) {
    console.log(produto.nome);
  }
  
  // Verificando se estão em promoção
  console.log("\n📌 Promoções:");
  for (const produto of produtos) {
    if (produto.promocao) {
      console.log(`${produto.nome} está em promoção!`);
    } else {
      console.log(`${produto.nome} não está em promoção.`);
    }
  }
  
  // Funções tradicionais e arrow
  function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual / 100);
  }
  
  const exibirInfo = (produto) => {
    return `Produto: ${produto.nome}, Preço: R$${produto.preco}`;
  };
  
  console.log("\n📌 Exemplo de desconto:", calcularDesconto(100, 10));
  console.log(exibirInfo(produtos[0]));
  
  // ============================
  // 🔹 Fase 2 – Intermediário
  // ============================
  
  // Filtrar só promoções
  const emPromocao = produtos.filter(p => p.promocao);
  console.log("\n📌 Produtos em promoção:", emPromocao);
  
  // Map: aplicar 10% de desconto nos que estão em promoção
  const comDesconto = produtos.map(p => {
    return p.promocao ? { ...p, preco: calcularDesconto(p.preco, 10) } : p;
  });
  console.log("\n📌 Produtos com desconto aplicado:", comDesconto);
  
  // Reduce: total da compra
  const total = produtos.reduce((soma, p) => soma + p.preco, 0);
  console.log("\n📌 Valor total dos produtos:", total);
  
  // Média dos preços
  const media = total / produtos.length;
  console.log("📌 Média dos preços:", media);
  
  // Find: procurar produto por id
  const buscarPorId = (id) => produtos.find(p => p.id === id);
  console.log("\n📌 Buscar produto com ID 2:", buscarPorId(2));
  
  // Some e Every
  const existePromocao = produtos.some(p => p.promocao);
  const todosValidos = produtos.every(p => p.preco > 0);
  console.log("\n📌 Existe algum em promoção?", existePromocao);
  console.log("📌 Todos os preços são válidos (>0)?", todosValidos);
  
  // ============================
  // 🔹 Fase 3 – Objetos e Classes
  // ============================
  
  class Produto {
    constructor(nome, preco, promocao = false) {
      this.nome = nome;
      this.preco = preco;
      this.promocao = promocao;
    }
  
    aplicarDesconto(percentual) {
      if (this.promocao) {
        this.preco = this.preco - (this.preco * percentual / 100);
      }
    }
  
    info() {
      return `Produto: ${this.nome}, Preço: R$${this.preco}, Promoção: ${this.promocao}`;
    }
  }
  
  // Criando produtos com new
  const p1 = new Produto("Monitor", 1200, true);
  const p2 = new Produto("Cadeira Gamer", 1500, false);
  p1.aplicarDesconto(15);
  
  console.log("\n📌 Classe Produto:");
  console.log(p1.info());
  console.log(p2.info());
  
  // this, call, apply, bind
  function mostrarDetalhes(extra) {
    console.log(`Produto: ${this.nome}, Preço: ${this.preco}, Extra: ${extra}`);
  }
  
  mostrarDetalhes.call(p1, "Usando call()");
  mostrarDetalhes.apply(p2, ["Usando apply()"]);
  
  const mostrarBind = mostrarDetalhes.bind(p1);
  mostrarBind("Usando bind()");
  
  // Spread/rest
  const novosProdutos = [
    ...produtos,
    { id: 4, nome: "Headset", preco: 300, promocao: true }
  ];
  console.log("\n📌 Usando spread para adicionar produto:", novosProdutos);
  
  // Destructuring
  const { nome, preco } = produtos[0];
  console.log("\n📌 Destructuring exemplo:");
  console.log(`Produto: ${nome}, Preço: ${preco}`);