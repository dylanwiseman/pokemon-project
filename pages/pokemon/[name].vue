<script setup lang="ts">
// @ts-ignore
const route = useRoute();
console.log(route.params.name);

// export default {
//   data() {
//     return {
//       pokemonList: new Array<Pokemon>(
//         { name: "pikachu", thumbnail: "" },
//         { name: "raichu", thumbnail: "" }
//       ),
//       searchTerm: "" as string,
//     };
//   },
//   methods: {
//     filterPokemon(): Pokemon[] {
//       return this.pokemonList.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     },
//     async getPokemon(): Promise<void> {
//       const pokemonRes = await fetch("/api/pokemon");
//       // console.log("frontend pokemon return: ", await pokemonRes.json());
//       this.pokemonList = await pokemonRes.json();
//       console.log(this.pokemonList);
//     },
//   },
//   async mounted() {
//     await this.getPokemon();
//   },
// };
</script>
<template>
  <div>
    <h1>{{ route.params.name }}</h1>
  </div>
</template>
