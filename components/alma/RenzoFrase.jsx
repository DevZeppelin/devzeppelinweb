import React from "react";
import { useState } from "react";


const RenzoFrase = () => {
  const [frase, setFrase] = useState("");
  const [error, setError] = useState(false);

  const getFrase = async () => {
    try {
      const url = "https://6340974416ffb7e275c310ba.mockapi.io/frases/";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      let contador = 0;
      if (frase != "") {
        setError(true);
      }

      function getRandomInt(num) {
        return Math.floor(Math.random() * num);
      }
      const largo = resultado[0].frases.length;
      const index = getRandomInt(largo);

      setFrase(resultado[0].frases[index].frase);
      console.log(frase);
      //setHayFrase(true)

      return frase;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center my-6 mx-4 md:mx-64 rounded-lg py-4">
      <button
        className="px-6 py-2 border-2 bg-black hover:from-alma1 to-alma2 hover:to-alma3 hover:scale-125 transition-transform rounded-lg text-white font-bold"
        onClick={() => getFrase()}
      >
        Oye, quiero mi frase diaria
      </button>
      {error ? (
        <div className="m-6 italic font-bold p-16 bg-red-500 rounded-2xl border-2 border-black">
          Lo siento... no podés pedir más Renzo frases por hoy... ☹
        </div>
      ) : frase ? (
        <div className="m-6 italic font-bold p-16 bg-white rounded-2xl border-2 border-black">
          {frase}
        </div>
      ) : null}
    </div>
  );
};

export default RenzoFrase;
