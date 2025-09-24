// Type
type Order = {
  productId: string,
  price: number
}
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Henrique",
  age: 19,
  email: "henrique@gmail.com",
  orders: [{productId: '1', price:200}],
  register() {
      return 'a';
  },
};


const printLog = (message: string) => {};

printLog(user.password!);

// Unios
type Author = {
  books: string[]
}

const author: Author & User = {
  age: 2,
  books: ['1'],
  email: 'author@gmail.com',
  firstName: 'Felipe',
  orders: [{productId: '2', price: 100}],
  register() {
      return "b";
  },
};

// Interfaces
interface UserInterface {
  fistName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  fistName: "Felipe",
  login() {
      return "a";
  },
};

interface AuthorInterface {
  books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  fistName: "Felipe",
  books: [],
  login() {
      return "a";
  },
};

type Grade = number | string;
const grade: Grade = 1;


