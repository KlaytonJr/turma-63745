import "./style.css"

import Header from "../Header"
import CartWidget from "../CartWidget";

function NavBar ({ tituloHeader }) {
    return (
        <div className="Navbar">
            <h1>Klayton Store</h1>

            <nav>
                <ul>
                    <li><a href="http://google.com" >Home</a></li>
                    <li><a href="http://google.com" >Produtos</a></li>
                    <li><a href="http://google.com" >Novidades</a></li>
                </ul>
            </nav>

            <Header titulo={tituloHeader} />

            <CartWidget />
        </div>
    );
}

export default NavBar;