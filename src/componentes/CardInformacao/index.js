import "./style.css";

export default function CardInformacao ({tipoAnimal}) { /* Enviando o state atual para o componente via props*/
    let nomeAnimalCachorro = "cachorro";
    let nomeAnimalGato = "gato";
    let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
    let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";

    return (
        <div className="CardInformacao">
            <h3>Informação sobre o {tipoAnimal === "cachorro" ? nomeAnimalCachorro : nomeAnimalGato}</h3>
            <p>{tipoAnimal === "cachorro" ? informacaoCachorro : informacaoGato}</p>
        </div>
    );
}

/* Com o valor atual do state será feito um IF ternário para atualizar o componente */
