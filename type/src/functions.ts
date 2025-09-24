interface MathFunc {
    (x: number, y: number): number;
};

// Definir tipo de parametros
const sum: MathFunc = (x: number, y:number) : number => {return x+y};

// a variavel ficou com tipo number ou string
const value = sum(2,3);

const log = (message: string) : void => {
    console.log(message);
};

const sub: MathFunc = (x: number, y: number) => {
    return x - y;
};

