import { useEffect } from "react";

export default function Counter() {
  useEffect(() => {
    const button = document.getElementById("adicionar");

    button.addEventListener("click", mostrarConsole);

    // Limpeza do Componente
    return () => {
      button.removeEventListener("click", mostrarConsole);
    };
  });

  function mostrarConsole() {
    console.log("clicou");
  }

  return (
    <div>
      <button id="adicionar">+</button>
    </div>
  );
}
