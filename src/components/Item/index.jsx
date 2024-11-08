import "./style.css"

function Item({ titulo, descricao }) {
    return (
        <div className="produto">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Item;

