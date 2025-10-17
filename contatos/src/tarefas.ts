

interface Tarefa {
    id: number,
    nome: string,
    concluida: boolean
}

let tarefas: Tarefa[] = [];
let nextId: number = 1;

const addTarefa = (nome: string, concluida: boolean): Tarefa => {
    const novaTarefa = {
        id: nextId++,
        nome,
        concluida
    }

    tarefas.push(novaTarefa);
    return novaTarefa;
}

const listarTarefas = (): Tarefa[] => {
    return tarefas
};

const updateTarefa = (id: number, dados: Partial<Tarefa>): Tarefa | null => {
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) return null;
    Object.assign(tarefa, dados)
    return tarefa;
}

const removerTarefa = (id:number): boolean => {
    const tamanhoInicial = tarefas.length;
    tarefas = tarefas.filter((t) => t.id !== id);

    return tarefas.length < tamanhoInicial
}


let t1 = addTarefa("Correr", false);
let t2 = addTarefa("Academia", true);

console.log(listarTarefas());

