import "./style.css"

import Header from "../Header"
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

function NavBar ({ tituloHeader }) {
    return (
        <div className="Navbar">
            <h1>Klayton Store</h1>

            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/produto/123'}>Produto</Link></li>
                </ul>
            </nav>

            <Header titulo={tituloHeader} />

            <CartWidget />
        </div>
    );
}

export default NavBar;