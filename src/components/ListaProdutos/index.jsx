import { useEffect } from "react";
import Produto from "../Produto";

// Componente Container
function ListaProdutos({ children, cpnTeste }) {
    const produtos = [
        {
          titulo: "Camisa Branca",
          descricao: "Suja"
        },
        {
          titulo: "Camisa Vermelha",
          descricao: "Amassada"
        },
        {
          titulo: "Camisa Preta",
          descricao: "Lisa"
        },
    ]

    useEffect(() => {
      console.log("Montei a lista de produtos");

      return () => {
        console.log("Desmontei a lista de produtos");
      }
    }, []);

    return (
        <div>
            { children }

            <div className='lista-produtos'>
                {
                  produtos.map((produto) => <Produto titulo={produto.titulo} key={produto.descricao} descricao={produto.descricao} />)
                }

                {/* <Produto 
                // foto={fotoLink}
                titulo="Camisa Polo"
                descricao="Camisa de algodão egipicio"
                />

                <Produto 
                titulo="Camisa Gola V"
                descricao="Camisa de algodão do chile"
                />

                <Produto 
                titulo="Bermuda"
                descricao="Bermuda pequena"
                /> */}
            </div>

            { children }

            { cpnTeste({ text: "Isso é um texto" }) }
        </div>
    )
}

export default ListaProdutos;