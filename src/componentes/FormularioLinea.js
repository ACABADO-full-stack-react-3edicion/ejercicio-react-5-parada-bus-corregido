import { useContext, useState } from "react";
import { LineasContext } from "../contextos/LineasContext";

export const FormularioLinea = (props) => {
  const { setLineaEscogida } = props;
  const { lineas } = useContext(LineasContext);
  const [linea, setLinea] = useState("");
  const eligeLinea = (e) => {
    setLinea(e.target.value);
    if (e.target.value !== "") {
      setLineaEscogida(e.target.value);
    }
  };
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" value={linea} onChange={eligeLinea}>
        <option value="" disabled selected>
          Elige línea
        </option>
        {lineas.map(({ line }) => (
          <option value={line} key={line}>
            {line}
          </option>
        ))}
      </select>
    </form>
  );
};
