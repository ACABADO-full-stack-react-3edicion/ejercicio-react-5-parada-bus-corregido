import { useContext, useEffect, useState } from "react";
import { LineasContext } from "../contextos/LineasContext";

export const Display = () => {
  const { lineas } = useContext(LineasContext);
  const [contador, setContador] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setContador((contador) => contador + 1);
    }, 2000);
  }, []);
  return (
    <div className="display">
      {lineas.map(({ line, destination, "text-ca": textCa }) => (
        <div
          key={line}
          className="bus"
          style={{ top: -30 * (contador % lineas.length) }}
        >
          <span className="linea">{line}</span>
          <span className="destino">{destination}</span>
          <span className="tiempo">{textCa}</span>
        </div>
      ))}
    </div>
  );
};
