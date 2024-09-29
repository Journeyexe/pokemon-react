import { useEffect, useState } from "react";
import { loadPokemon } from "../../services/load-pokemon";
import Posts from "../../components/posts";

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
      <Posts pokemon={pokemon}/>
    </>
  );
}
