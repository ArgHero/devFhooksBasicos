import "./Planeta.css"
import { useEffect } from "react";

function Planeta(props){
    const {nombre} = props;

    useEffect(()=>{
        //montaje
        console.log(`¡El planeta ${nombre} ha aparecido!`);
        
        //desmontaje
        return()=>{
            console.log(`¡El planeta ${nombre} ha desaparecido!`);
        }
    },[])


    return(<>
        <div>{nombre}</div>
    </>)
}

export default Planeta;