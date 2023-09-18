<script lang="ts">
interface Pokemon {
  name: string;
  thumbnail: string;
}

export default {
  data() {
    return {
      pokemonList: new Array<Pokemon>(
        { name: "pikachu", thumbnail: "" },
        { name: "raichu", thumbnail: "" }
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
      // console.log("frontend pokemon return: ", await pokemonRes.json());
      this.pokemonList = await pokemonRes.json();
      console.log(this.pokemonList);
    },
  },
  async mounted() {
    await this.getPokemon();
  },
};
</script>

<template>
  <div>
    <input v-model="searchTerm" placeholder="Search for a Pokemon" />
    <div class="container">
      <div
        v-for="pokemon in filterPokemon()"
        :key="pokemon.name"
        class="pokemon-container"
      >
        <router-link :to="`/pokemon/${pokemon.name}`" class="link">
          <div>{{ pokemon.name }}</div>
          <img :src="pokemon.thumbnail" :alt="pokemon.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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
