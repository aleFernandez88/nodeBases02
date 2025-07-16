const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const pokemon = await resp.json();

  return pokemon.name;
  // return fetch(url)
  //   .then((res) => res.json())
  //   .then(() => {
  //     throw new Error("El pokemon no existe.");
  //   })
  //   .then((pokemon) => pokemon.name);
};

module.exports = {
  getPokemonById,
};
