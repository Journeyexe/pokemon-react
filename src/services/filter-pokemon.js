export const filterPokemon = (pokemon, value) => {
  // eslint-disable-next-line array-callback-return
  return pokemon.filter(
    (p) =>
      p.name.includes(value.toString().toLowerCase()) ||
      value.toString().toLowerCase().includes(p.types[0].type.name) ||
      value.toString().toLowerCase().includes(p.types[1]?.type.name)
  );
};
