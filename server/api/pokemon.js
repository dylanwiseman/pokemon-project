export default defineEventHandler(async (event) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=60");
  const data = await response.json();
  const pokemonList = data.results.map((pokemon) => ({
    name: pokemon.name,
    thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.url.split("/")[6]
    }.png`,
  }));
  return pokemonList;
});
