<template>
  <div class="FonSite">
    <div class="PrimeBlock">
      <PrimeBlock />
      <SecondBlock />
    </div>
  </div>
</template>

<script>
import PrimeBlock from "@/Blocks/PrimeBlock.vue";
import SecondBlock from "@/Blocks/SecondBlock.vue";
export default {
  components: {
    PrimeBlock,
    SecondBlock,
  },
  props: {},
  method: {},
};
</script>

<style scoped>
.FonSite {
  display: flex;
  justify-content: center;
}
.PrimeBlock {
  width: 1080px;
  height: 200px;
  background-color: aqua;
}
</style>
