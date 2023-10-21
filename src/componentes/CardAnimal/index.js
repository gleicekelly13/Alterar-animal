import "./style.css";
import ImagemCachorro from "../../assets/cachorro.jpg";
import ImagemGato from "../../assets/gato.jpg";

export default function CardAnimal ({tipoAnimal}) {
        return (
            <div className="CardAnimal">
                <img src={tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato} alt="animal" />
            </div>
        );
}