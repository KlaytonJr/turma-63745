import Item from "../Item";

function ItemList({ produtos }) {
    return (
        <div>
            <div className='lista-produtos'>
                {
                  produtos.map((produto) => <Item titulo={produto.titulo} key={produto.descricao} descricao={produto.descricao} />)
                }
            </div>
        </div>
    )
}

export default ItemList;