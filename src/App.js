import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ListaProdutos from './components/ListaProdutos';

import NavBar from './components/NavBar';
import Produto from './components/Produto';

function App() {
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showLista, setShowLista] = useState(true);

  // console.log("Antes do useEffect");

  // // chamada de API -> demora 30s
  
  // // Executado na montagem -> [] -> Depois que foi montado
  useEffect(() => {
    console.log("Dentro do useEffect");

    // addEventListener();
    
    // Chamada de API
    setTimeout(() => {
      console.log("Executado...");
      setLoading(false);
    }, 2000);

    // Executado na desmontagem
    return () => {
      console.log("desmontei")
      // removeEventListener()
    }
  }, []);

  // // Executado sempre que atualiza o estado contador
  useEffect(() => {
    console.log("Contador mudou");
    // setContador(contador + 1)
  }, [contador]);

  // // Executado sempre que atualização -> filtro undefined
  useEffect(() => {
    console.log("Todos re-render");
  });

  // console.log("Depois do useEffect");
  

  const fotoLink = "https://github.com/KlaytonJr/MB-Challenge/blob/main/screenshots/performance-mb-challenge.png?raw=true";

  const noticias = [
    {
      titulo: "Fulano morreu",
      descricao: "mas passa bem",
      img: "https://"
    }
  ]


  function adicionarContador() {
    setContador(contador + 1);
  }
  
  
  return (
    <div className="App">
      { loading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <NavBar 
            tituloHeader="Esse é um titulo"
          />
    
          <ItemListContainer greeting="Esse é o meu ItemListContainer" />
    
          <Header titulo="Titulo do Header" />
    
          <h2>Conteúdo</h2>
    
          { showLista && (
            <ListaProdutos cpnTeste={ComponenteTest} >
              <p>Feito por Klayton</p>
              <p>Com amor</p>
              <p>E carinho</p>
            </ListaProdutos>
          )}
          <button onClick={() => setShowLista(!showLista)}>Lista</button>
    
          <Produto titulo="Avulso" descricao="Produto fora da ListaProdutos" />
    
          <h1>{ contador }</h1>
          <button onClick={adicionarContador}>Adicionar</button>
        </>
      ) }

    </div>
  );
}

function ComponenteTest({ text }) {
  return (
    <div>
      <h2>{ text }</h2>
    </div>
  )
}

export default App;
