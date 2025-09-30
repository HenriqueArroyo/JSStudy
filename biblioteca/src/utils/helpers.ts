export function formatarLivro({titulo, preco}: {titulo: string; preco: number;}): string {
    return `${titulo} - R$ ${preco.toFixed(2)}`;
}

