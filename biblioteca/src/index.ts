import { Biblioteca} from "./services/Biblioteca";
import { formatarLivro } from "./utils/helpers";

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({id:1, titulo: "Clean Code", preco: 120, promocao: true});
biblioteca.adicionarLivro({id:2, titulo: "Refactoring", preco: 200, promocao: false});
biblioteca.adicionarLivro({id:3, titulo: "Domain-Driven Design", preco: 180, promocao: true});

console.log("Todos os livros: ");
biblioteca.listarLivros().forEach(l => console.log(formatarLivro(l)));

console.log("\nLivros em promoção: ");
console.log(biblioteca.filtrarPromocao());


console.log("\nMédia dos preços: ", biblioteca.calcularMediaPreco());


