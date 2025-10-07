"use strict";
const fatorial = (f) => {
    let total = 1;
    for (let i = f; i > 0; i--) {
        total = total * i;
    }
    return total;
};
console.log(fatorial(5));
