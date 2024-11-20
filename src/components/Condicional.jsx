import { useState, useEffect } from "react";

export default function Condicional() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  async function pegarItem() {
    setLoading(true);
    promiseItem()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    pegarItem();

    setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Limpeza
    // removeEventListener
    return () => {};
  }, []);

  // return (
  //   <div>
  //     {loading ? <h2>Loading...</h2> : <h3>Loaded</h3>}
  //   </div>
  // )

  // Tipo 1 - If com return precoce
  // if (loading) {
  //   return (
  //     <main>
  //       <p>Carregando...</p>
  //     </main>
  //   )
  // }

  // return (
  //   <main>
  //     React ⚛️ + Vite ⚡ + Replit 🌀
  //   </main>
  // )

  // Tipo 2 - Rendering Inline fragment
  // return (
  //   <main>
  //     <p>Carregando...{loading.toString()}</p>
  //     {loading && <p>Carregando...</p>}
  //     {!loading && <p>Carregado</p>}
  //   </main>
  // )


  // Tipo 3 - Rendering Inline Ternary
  // return (
  //   <main>
  //     {loading ? <p>Carregando</p> : <p>Carregado</p>} {/* Com dismount */}

  //     <p>{loading ? "Carregando" : "Carregado"}</p> {/* Sem dismount (reaproveita o componente e muda o conteúdo) */}
  //   </main>
  // );

  // Tipo 4 - Rendering Componentes (Bônus)
  const tipo = "Esse";
  const Intermediario = tipo === "Esse" ? Esse : Outro;
  // Aqui usar o componente sem os < />

  // Lembrar, quando usar esse método, os props dos coponentes preferencialmente devem ser iguais, para passarmos elas no <Intermediario ...props... />
  return (
    <main>
      {/* <p>Carregado</p> */}
      {/* {loading ? <p>Carregando</p> : <p>Carregado</p>} */}
      {/* <Intermediario text="Texto" /> */}
      <h1
        style={{ color: loading ? "red" : "green" }}
        className={loading ? "load" : ""}
      >
        {" "}
        Status... {loading.toString()}{" "}
      </h1>
    </main>
  );
}

function promiseItem() {
  return new Promise((resolve, reject) => {
    // setTimeout -> Simular demora de resposta
    setTimeout(() => {
      resolve({ name: "Klayton" }); // O que a API fake retorna
    }, 3000);
  });
}

// Componentes
function Esse({ text }) {
  return <p>Esse {text}</p>;
}

function Outro({ text }) {
  return <p>Outro {text}</p>;
}
