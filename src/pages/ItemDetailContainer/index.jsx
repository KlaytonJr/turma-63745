import { useParams } from "react-router-dom";

function ItemDetailContainer () {
    // ter um use state, para pegar o id do produto e buscar na API
    const { produtoId } = useParams();

    return (
        <div>
            <h1>Detalhes do Produto</h1>
            <h3>Camisa Polo - { produtoId }</h3>
            <h4>R$ 50,00</h4>
        </div>
    )
}

export default ItemDetailContainer;