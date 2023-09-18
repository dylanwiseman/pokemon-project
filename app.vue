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
    <div v-for="pokemon in filterPokemon()" :key="pokemon.name">
      <router-link :to="`/pokemon/${pokemon.name}`">
        <div>{{ pokemon.name }}</div>
        <img :src="pokemon.thumbnail" :alt="pokemon.name" />
      </router-link>
    </div>
  </div>
</template>
