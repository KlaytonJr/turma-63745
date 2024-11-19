import { useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemDetailContainer() {
  const { cart, addToCart } = useContext(CartContext);

  // ter um use state, para pegar o id do produto e buscar na API
  const { produtoId } = useParams();

  const [count, setCount] = useState(1);
  const stock = 5;

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAdd = () => {
    addToCart({
      id: Math.round(Math.random() * 10),
      name: `Camisa Polo ${Math.round(Math.random() * 10)}`,
      price: 50,
    });
  };

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <h3>Camisa Polo - {produtoId}</h3>
      <h4>R$ 50,00</h4>

      <ItemCount
        handleAdd={handleAdd}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        stock={stock}
        count={count}
      />


      <button className="add-button" onClick={handleAdd} disabled={stock === 0}>
        Adicionar ao Carrinho
      </button>
      
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemDetailContainer;
