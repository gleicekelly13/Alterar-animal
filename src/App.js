import "./App.css";
import { useState } from "react";
import CardAnimal from "./componentes/CardAnimal";
import CardInformacao from "./componentes/CardInformacao";

export default function App () {
  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "Cachorro";

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if(tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>    

      <CardAnimal tipoAnimal = {tipoDoComponenteCard}/>

      <CardInformacao tipoAnimal = {tipoDoComponenteCard} />
    </div>
  );
}