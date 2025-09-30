"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarLivro = formatarLivro;
function formatarLivro({ titulo, preco }) {
    return `${titulo} - R$ ${preco.toFixed(2)}`;
}
