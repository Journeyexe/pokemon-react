import { useEffect, useState } from "react";
import { loadPokemon } from "../../services/load-pokemon";
import Posts from "../../components/posts";
import { filterPokemon } from "../../services/filter-pokemon";
import './styles.css'

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  // const [filteredPokemon, setFilteredPokemon] = useState([]);

  const getApiData = async () => {
    setPokemon(await loadPokemon());
  };

  useEffect(() => {
    getApiData();
  });

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(value)
    setSearchValue(value);
  };

  return (
    <div className="page">
      <input placeholder="Buscar..." className="searchBar" type="search" onChange={handleChange} value={searchValue}/>
      <Posts pokemon={!!searchValue ? filterPokemon(pokemon, searchValue) : pokemon} />
    </div>
  );
}
