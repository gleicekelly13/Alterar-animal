import './style.css';

export default function Topo ({clickAlterarAnimal}) {
    return (
        <header>
            <h1>Projeto Props + useState</h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick={clickAlterarAnimal}>Mudar Animal</button>
        </header>    
    );
}