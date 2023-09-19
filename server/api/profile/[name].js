export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const abilities = data.abilities.map((a) => {
    return capitalizeFirstLetter(a.ability?.name);
  });

  const profileData = {
    name: name,
    height: data.height,
    weight: data.weight,
    abilities: abilities.join(", "),
    thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      data.species.url.split("/")[6]
    }.png`,
  };

  return profileData;
});
