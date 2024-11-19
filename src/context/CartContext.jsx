import { createContext, useState, useContext } from "react";

// 1 passo: criar contexto
export const CartContext = createContext();

// 2 passo: criar provider (componente)
export default function CartProvider ({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart (item) {
    if (!cart.find(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item]);
    } else {
      console.log('Item já está no carrinho');
      // adicionar quantidade
    }
  }

  function cartQuantity () {
    return cart.length;
  }

  // 3 passo: retornar provider e no value os items que serão compartilhados
  return (
    <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

/** ############## USO DO CONTEXT ################ */
// Custom hook para usar o CartContext
// 1. Criar a função custom para usar os dados do provider
export function useCart() {
  // 2. Usar o contexto do contexto criado anteriormente
  const context = useContext(CartContext);

  // 3. Verificar se o componente está dentro do provider
  if (!context) {
    throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
  }

  // 4. retornar o contexto para quem tiver permissão
  return context;
}