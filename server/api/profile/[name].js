export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  console.log("getting profile for ", name);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  console.log("data: ", data);
  const profileData = {
    name: name,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities,
    thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name}.png`,
  };
  console.log(profileData);

  return profileData;
});
