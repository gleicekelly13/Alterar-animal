import "./style.css";
import ImagemCachorro from "../../assets/cachorro.jpg";
import ImagemGato from "../../assets/gato.jpg";

export default function CardAnimal ({tipoAnimal}) { /* Enviando o state atual para o componente */
        return (
            <div className="CardAnimal">
                <img src={tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato} alt="animal" /> 
            </div>
        );
}

/* Com o valor atual do state será feito um IF ternário para atualizar o componente */