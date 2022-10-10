import React from "react";


const RenzoFrase = () => {

  const getFrase = async () => {
    try {
      const url = "https://6340974416ffb7e275c310ba.mockapi.io/frases/";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();      
      
      function getRandomInt(num) {
          return Math.floor(Math.random() * num);
        }
        const largo = resultado[0].frases.length;
        const index = getRandomInt(largo)

        let frase = resultado[0].frases[index]  
        return frase
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => getFrase()}>Obten tu Frase</button>
      <p>{ frase ? "frase" : null}</p>
    </div>
  );
};

export default RenzoFrase;
