// ---------- Types (tipos personalizados) ----------

// Define um tipo chamado "Order" para representar um pedido
type Order = {
  productId: string, // ID do produto (string)
  price: number      // preço do produto (número)
}

// Define um tipo chamado "User" para representar um usuário
type User = {
  firstName: string;     // nome do usuário
  age: number;           // idade
  email: string;         // email
  password?: string;     // senha (opcional, indicado pelo "?")
  orders: Order[];       // lista de pedidos (array de "Order")
  register(): string;    // função que retorna uma string
};

// Criação de um objeto do tipo "User"
const user: User = {
  firstName: "Henrique",
  age: 19,
  email: "henrique@gmail.com",
  orders: [{ productId: '1', price: 200 }], // pedido inicial
  register() {
      return 'a'; // implementação do método "register"
  },
};

// Função que recebe uma mensagem do tipo string
const printLog = (message: string) => {};

// Aqui o operador "!" indica que a propriedade não será null/undefined
printLog(user.password!);


// ---------- Union & Intersections ----------

// Define um tipo "Author" com um array de livros
type Author = {
  books: string[]
}

// Criação de um objeto que une "Author" e "User"
// ou seja, precisa ter as propriedades de ambos
const author: Author & User = {
  age: 2,
  books: ['1'], // herdado de Author
  email: 'author@gmail.com',
  firstName: 'Felipe',
  orders: [{ productId: '2', price: 100 }],
  register() {
      return "b";
  },
};


// ---------- Interfaces ----------

// Interface "UserInterface"
interface UserInterface {
  firstName: string; // nome (obs: escrito errado, deveria ser firstName 😅)
  email: string;    // email
  login(): string;  // método que retorna string
}

// Objeto que implementa a interface "UserInterface"
const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  firstName: "Felipe",
  login() {
      return "a";
  },
};

// Interface "AuthorInterface"
interface AuthorInterface {
  books: string[]; // lista de livros
}

// Objeto que implementa as duas interfaces ao mesmo tempo
const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  firstName: "Felipe",
  books: [],
  login() {
      return "a";
  },
};


// ---------- Union Types ----------

// Type "Grade" que pode ser número ou string
type Grade = number | string;

// Exemplo de uso
const grade: Grade = 1; // poderia ser "1" (string) também
