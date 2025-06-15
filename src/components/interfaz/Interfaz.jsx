import "./Interfaz.css"
import Tacometro from "../tacometro/Tacometro";

function Interfaz(props){
    const {distancia, combustible, mensajeEstado, setEstadoNave} = props;

    const handleClick = (event)=>{
        event.preventDefault();
        setEstadoNave("aterrizado")
    }

    return(<>
        <h2>Distancia recorrida: {distancia}</h2>
        <Tacometro value={combustible}/>
        <h3>{mensajeEstado}</h3>
        <button type="button" onClick={handleClick}>Aterrizar</button>
    </>)
}

export default Interfaz;