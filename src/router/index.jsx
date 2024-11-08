import { Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar";

// Pages
import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";

function Router () {
    return (
        <>
            <NavBar tituloHeader="Router" />

            <Routes>
                <Route exact path="/" element={ <ItemListContainer /> } />
                <Route exact path="/produto/:produtoId" element={ <ItemDetailContainer /> } />
            </Routes>
        </>
    )
}

export default Router;