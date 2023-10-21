import "./style.css";

export default function CardInformacao ({tipoAnimal, informacaoAnimal}) {
    return (
        <div className="CardInformacao">
            <h3>Informação sobre o {tipoAnimal}</h3>
            <p>{informacaoAnimal}</p>
        </div>
    );
}