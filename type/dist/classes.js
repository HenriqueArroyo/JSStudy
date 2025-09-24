"use strict";
// ---------- Interface ----------
Object.defineProperty(exports, "__esModule", { value: true });
// ---------- Classe Person ----------
// A classe Person IMPLEMENTA a interface IPerson.
// Isso significa que ela é obrigada a seguir o contrato (ter "id" e "sayMyName").
class Person {
    // "readonly" -> só pode ser atribuído no construtor, não pode ser alterado depois
    id;
    // "protected" -> acessível apenas dentro da classe e em classes que herdam dela
    name;
    // "private" -> acessível apenas dentro da própria classe
    age;
    // Construtor inicializa as propriedades
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // Método exigido pela interface: retorna o nome da pessoa
    sayMyName() {
        return this.name;
    }
}
// ---------- Classe Employee (Herança) ----------
// Employee herda de Person.
// Ou seja, Employee tem acesso aos atributos/métodos de Person
// (respeitando os modificadores de acesso).
class Employee extends Person {
    constructor(id, name, age) {
        // "super" chama o construtor da classe pai (Person).
        super(id, name, age);
    }
    // Método próprio da classe Employee.
    // Aqui conseguimos acessar "name" porque ele é "protected".
    whoAmI() {
        return this.name;
    }
}
// ---------- Uso ----------
// Criando uma instância da classe Person
const felipe = new Person(1, 'Felipe', 21);
// Agora "felipe" possui um id, name (não acessível diretamente fora da classe),
// age (privado, inacessível fora da classe) e o método sayMyName().
//# sourceMappingURL=classes.js.map