import { useContext } from "react";
import { LineasContext } from "../contextos/LineasContext";
import { Display } from "./Display";

export const Info = (props) => {
  const { parada, lineaEscogida } = props;
  const { lineas } = useContext(LineasContext);
  const linea = lineas.find((linea) => linea.line === lineaEscogida);
  const textoParada =
    parada === null
      ? "Introduce parada"
      : parada === 0
      ? "No existe la parada"
      : `Parada nº ${parada}`;
  return (
    <header className="cabecera">
      <h1>{textoParada}</h1>
      <Display />
      {lineaEscogida && (
        <h2>
          Tiempo para la línea {lineaEscogida}: {linea["text-ca"]}
        </h2>
      )}
    </header>
  );
};
