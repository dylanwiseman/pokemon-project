<script lang="ts">
interface Pokemon {
  name: string;
  thumbnail: string;
}

export default {
  data() {
    return {
      pokemonList: new Array<Pokemon>(
        { name: "Loading...", thumbnail: "" },
        { name: "Loading...", thumbnail: "" },
        { name: "Loading...", thumbnail: "" }
      ),
      searchTerm: "" as string,
    };
  },
  methods: {
    filterPokemon(): Pokemon[] {
      return this.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    async getPokemon(): Promise<void> {
      const pokemonRes = await fetch("/api/pokemon");
      this.pokemonList = await pokemonRes.json();
    },
  },
  async mounted() {
    await this.getPokemon();
  },
};
</script>

<template>
  <div>
    <h1>Pokémon Database</h1>
    <div class="input-container">
      <img src="/search.png" width="18" height="18" class="search-img" />
      <input v-model="searchTerm" />
    </div>
    <div class="container">
      <div
        v-for="pokemon in filterPokemon()"
        :key="pokemon.name"
        class="pokemon-container"
      >
        <NuxtLink :to="`/pokemon/${pokemon.name}`" class="link">
          <div class="name">{{ pokemon.name }}</div>
          <img :src="pokemon.thumbnail" :alt="pokemon.name" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background-color: #3f4045;
}
h1 {
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
p {
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
.search-img {
  margin-right: 8px;
  margin-top: 4px;
}
input {
  text-align: left;
  font-size: 18px;
  color: white;
  background-color: #242528;
  border-radius: 10px;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  padding: 4px;
  padding-left: 8px;
}
input::placeholder {
  color: gray;
}
.input-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
input:focus {
  outline: none;
}
.name {
  margin-top: 8px;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100vw;
}
.pokemon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  width: 100px;
  height: 120px;
  margin: 12px;
  border-radius: 3px;
  box-shadow: 3px 3px black;
}
.pokemon-container:hover {
  box-shadow: 1px 1px black;
  transform: translateY(2px);
}
.link {
  color: black;
  font-style: none;
  text-decoration: none;
  width: 100%;
  text-align: center;
}
</style>
