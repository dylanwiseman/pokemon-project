export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  //   console.log("getting profile for ", name);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  //   console.log("data: ", data);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //   console.log(data.abilities);
  const abilities = data.abilities.map((a) => {
    return capitalizeFirstLetter(a.ability?.name);
  });
  //   console.log(abilities.join(", "));

  const profileData = {
    name: name,
    height: data.height,
    weight: data.weight,
    abilities: abilities.join(", "),
    thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      data.species.url.split("/")[6]
    }.png`,
  };
  //   console.log(profileData);

  return profileData;
});
