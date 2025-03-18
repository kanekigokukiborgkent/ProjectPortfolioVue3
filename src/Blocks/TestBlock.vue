<template>
  <section class="user-info">
    <!-- Imaginea utilizatorului -->
    <div class="user-image">
      <v-img
      class="imageStyle"
      :width="500"
      cover
      src="../assets/imagesSkills/SavciucMaxim.jpg"
    ></v-img>
    </div>

    <!-- Text suprapus -->
    <div class="user-text">
      <h1 class="user-name">{{ userName }}</h1>
      <p class="user-role">{{ userRole }}</p>
    </div>
  </section>
</template>

<script setup>
// Props sau variabile reactive
import { ref } from "vue";

const userName = ref("Savciuc Maxim");
const userRole = ref("Let's connect");
</script>

<style scoped lang="scss">
.user-info {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* Setează înălțimea secțiunii */
  background-color: #d5d3d3; /* Culoare de fundal */
  overflow: hidden;
}
.imageStyle{
  filter: drop-shadow(10px 0px 15px);
}
.user-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: grayscale(100%); /* Adaugă efect alb-negru */
}

.user-text {
  position: absolute; /* Suprapunere peste imagine */
  color: #ffffff; /* Culoare text */
  text-align: center;
}

.user-name {
  font-size: 6rem; /* Mărime text */
  font-weight: bold;
  margin: 0;
}

.user-role {
  font-size: 1.5rem;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
</style>
