import "./style.css";

export default function CardAnimal ({
    imagemAnimal}) {
        return (
            <div className="CardAnimal">
                <img src={imagemAnimal} alt="animal" />
            </div>
        );
}