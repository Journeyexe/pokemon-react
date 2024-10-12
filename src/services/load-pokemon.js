export const loadPokemon = async () => {
  const endpoints = [];

  try {
    for (var i = 906; i <=1008; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    const pokemon = await Promise.all(
      endpoints.map((endpoint) => fetch(endpoint))
    );
    const pokemonJson = await Promise.all(pokemon.map(async (p) => p.json()));

    return pokemonJson;
  } catch (e) {
    console.log(e);
  }
};
