import Image from "next/image";

const nome: string = "Compras";

const numeros: number[] = []

const soma = (...numeros: number[]) :number => {
  let total = 0;
  for (let n of numeros) {
      total += n;
  }
  return total;
};


export default function Home() {
  return (
  <div>
    <a href="#compras">
    <p>Olá {soma(15,24,39,4,18)}</p>    
    </a>
  </div>
  );
}
