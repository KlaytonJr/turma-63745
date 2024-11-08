import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";

function ItemListContainer() {
    // useState => produtos
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // setProdutos
            setProdutos([
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
            ]);
        }, 2000)
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ItemList produtos={produtos} />
        </div>
    )
}

export default ItemListContainer;