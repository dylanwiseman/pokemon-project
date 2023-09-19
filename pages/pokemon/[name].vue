<script setup lang="ts">
// interface Profile {
//   name: string;
//   height: number;
//   weight: number;
//   abilities: string;
//   thumbnail: string;
// }
//@ts-ignore
const route = useRoute();

//@ts-ignore
const profileData = ref({});

const fetchProfile = async (): Promise<void> => {
  try {
    // console.log("fetching profile");
    const response = await fetch(`../api/profile/${route.params.name}`);
    const result = await response.json();
    profileData.value = result;
    // console.log(profileData.value.thumbnail);
  } catch (error) {
    console.error(error);
  }
};

//@ts-ignore
onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <div class="container">
    <h1>{{ profileData.name }}</h1>

    <img :src="profileData.thumbnail" :alt="profileData.name" class="profpic" />
    <div class="stats">
      <h5>Height: {{ profileData.height }}</h5>
      <h5>Weight: {{ profileData.weight }}</h5>
      <h5>Abilities: {{ profileData.abilities }}</h5>
    </div>
  </div>
</template>
<style>
h5 {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stats {
  border-radius: 5px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #242528;
  margin-top: 24px;
}
.profpic {
  margin: 48px;
  transform: scale(3);
}
</style>
