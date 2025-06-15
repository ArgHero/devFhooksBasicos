import { useState, useEffect, useContext, useMemo, useRef } from "react";
import "./App.css";
import Interfaz from "./components/interfaz/Interfaz";
import Planeta from "./components/planeta/Planeta";

function App() {
  //Estados de la aplicación
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const estadoNaveRef = useRef(estadoNave);

  const planetasDisponibles = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Neptuno",
    "Xandar",
    "Krypton",
    "Zebulon",
    "Nova Prime",
    "Argos",
    "Erebus",
    "Titan IV",
  ];

  function planetaAleatorio() {
    const indice = Math.floor(Math.random() * planetasDisponibles.length);
    return planetasDisponibles[indice];
  }

  //Montaje y desmontaje
  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const vueloNave = setInterval(() => {
      setCombustible((comb) => {
        if (comb <= 0) {
          setEstadoNave("sin gas");
          return 0;
        }
        setPlanetasVisitados(lista=>{
          return [...lista,planetaAleatorio()]
        })
        return comb - 10;
      });
      if (estadoNaveRef.current === "En órbita") {
        setDistancia((dist) => dist + 100);
      } else clearInterval(vueloNave);
    }, 1000);

    return () => {
      clearInterval(vueloNave);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado! " + combustible);
  }, [combustible]);

  useEffect(() => {
    estadoNaveRef.current = estadoNave;
  }, [estadoNave]);

  // useEffect(()=>{
  //   console.log(planetasVisitados);
  // },[planetasVisitados])

  const mensajeEstado = useMemo(() => {
    let mensaje = "";
    switch (estadoNave.toLowerCase()) {
      case "en órbita":
        mensaje = "Funcionando con normalidad";
        break;
      case "sin gas":
        mensaje = "Nos quedamos sin gasolina";
        break;
      case "aterrizado":
        mensaje = "La nave aterrizó con éxito";
        break;
      default:
        mensaje = "Estado desconocido";
    }

    return mensaje;
  }, [estadoNave]);

  return (
    <>
      <Interfaz
        distancia={distancia}
        combustible={combustible}
        mensajeEstado={mensajeEstado}
        setEstadoNave={setEstadoNave}
      />
      <h3>Planetas visitados</h3>
      {planetasVisitados && planetasVisitados.map((planeta,key)=>{
        return(<Planeta key={key} nombre={planeta}/>)
      })}
    </>
  );
}

export default App;
