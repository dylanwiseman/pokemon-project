<script setup lang="ts">
// @ts-ignore
const route = useRoute();
console.log(route.params.name);
</script>
<template>
  <div>
    <h1>{{ route.params.name }}</h1>
  </div>
</template>
