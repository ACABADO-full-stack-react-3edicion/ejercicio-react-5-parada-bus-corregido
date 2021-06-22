import { useCallback, useEffect, useState } from "react";
import { FormularioLinea } from "./componentes/FormularioLinea";
import { FormularioParada } from "./componentes/FormularioParada";
import { Info } from "./componentes/Info";
import { LineasContext } from "./contextos/LineasContext";

function App() {
  const appId = process.env.REACT_APP_APP_ID;
  const appKey = process.env.REACT_APP_APP_KEY;
  const authQuery = `?app_id=${appId}&app_key=${appKey}`;
  const urlApiParada = "https://api.tmb.cat/v1/transit/parades/";
  const urlApiLineas = "https://api.tmb.cat/v1/ibus/stops/";
  const [parada, setParada] = useState(null);
  const [lineas, setLineas] = useState([]);
  const [lineaEscogida, setLineaEscogida] = useState(null);
  const compruebaParada = async (numeroParada) => {
    const resp = await fetch(`${urlApiParada}${numeroParada}${authQuery}`);
    const existeParada = await resp.json();
    if (existeParada.features.length === 0) {
      setParada(0);
    } else {
      setParada(numeroParada);
    }
  };
  const cargaProximasLineas = useCallback(async () => {
    const resp = await fetch(`${urlApiLineas}${parada}${authQuery}`);
    const lineas = await resp.json();
    setLineas(lineas.data.ibus);
  }, [authQuery, parada]);
  useEffect(() => {
    if (parada !== null) {
      cargaProximasLineas();
    }
  }, [cargaProximasLineas, parada]);
  return (
    <LineasContext.Provider value={{ lineas }}>
      <div className="contenedor">
        <Info lineaEscogida={lineaEscogida} parada={parada} />
        <section className="forms">
          <FormularioParada compruebaParada={compruebaParada} />
          <FormularioLinea setLineaEscogida={setLineaEscogida} />
        </section>
      </div>
    </LineasContext.Provider>
  );
}

export default App;
