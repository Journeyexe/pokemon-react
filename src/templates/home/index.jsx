import { useEffect, useState } from "react";
import { loadPokemon } from "../../services/load-pokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  const getApiData = async () => {
    setPokemon(await loadPokemon());
  };

  useEffect(() => {
    getApiData()
  })

  return (
    <>
      <h1>Olá Mundo!</h1>
      {pokemon.map((p) => (
        <h2 key={p.id}>{p.name}</h2>
      ))}
    </>
  );
}
