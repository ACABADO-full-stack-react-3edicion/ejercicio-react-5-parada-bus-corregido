import { useState } from "react";

export const FormularioParada = (props) => {
  const { compruebaParada } = props;
  const [numeroParada, setNumeroParada] = useState("");
  const buscarParada = (e) => {
    e.preventDefault();
    if (numeroParada !== "") {
      compruebaParada(numeroParada);
      setNumeroParada("");
    }
  };
  return (
    <form onSubmit={buscarParada}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input
        type="number"
        id="num-parada"
        value={numeroParada}
        onChange={(e) => setNumeroParada(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
