// Definir tipo de parametros
const sum = (x: number, y:number) : number | string => {return x+y};

// a variavel ficou com tipo number ou string
const value = sum(2,3);

const log = (message: string) : void => {
    console.log(message);
};

