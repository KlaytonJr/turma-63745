import "./style.css"

function Produto({ titulo, descricao, foto }) {
    return (
        <div className="produto">
            <img src={foto} />
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Produto;

