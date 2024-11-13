import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import Counter from "../../components/Counter";

function ItemListContainer() {
  // useState => produtos
  const [produtos, setProdutos] = useState([]);
  const [showCounter, setShowCounter] = useState(false);

  function funcao(event) {
    console.log(event);
    console.log(event.nativeEvent);
    setShowCounter(!showCounter);
  }

  function eventoDigitacao(event) {
    console.log(event);
    console.log(event.target.value);
  }

  const [input, setInput] = useState("");

  function clickNoTecaldo(event) {
    event.preventDefault();
    console.log("cliquei: ", event);
    setInput(input + event.key);
  }

  function semVogais(event) {
    event.preventDefault();
    console.log(event);
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    if (vogais.includes(event.key)) return;

    setInput(input + event.key);
  }

  useEffect(() => {
    setTimeout(() => {
      // setProdutos
      setProdutos([
        {
          titulo: "Camisa Branca",
          descricao: "Suja",
        },
        {
          titulo: "Camisa Vermelha",
          descricao: "Amassada",
        },
        {
          titulo: "Camisa Preta",
          descricao: "Lisa",
        },
      ]);
    }, 2000);
  }, []);

  const inputType = "input";
  const Count = inputType === "input" ? InputCount : ButtonCount;

  return (
    <div>
      <h1>Produtos</h1>
      <ItemList produtos={produtos} />

      {showCounter && <Counter />}
      <button onClick={funcao}>Clique aqui</button>

      <input onKeyUp={semVogais} value={input}></input>
      <Count onConfirm={() => {}} maxQuantity={10} />
    </div>
  );
}

export default ItemListContainer;

function ButtonCount({ onConfirm, maxQuantity }) {
  return (
    <div>
      <button>ButtonCount</button>
    </div>
  );
}

function InputCount({ onConfirm, maxQuantity }) {
  return (
    <div>
      <input placeholder="InputCount" />
    </div>
  );
}
