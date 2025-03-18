<template>
  <div class="FonSite">
    <div class="PrimeBlock">
      <!-- <TestBlock /> -->
      <!-- <PrimeBlock />
      <SecondBlock /> -->
      <ThirdBlock />
      <!-- <ForthBlock /> -->
    </div>
  </div>
</template>

<script>
// import TestBlock from "@/Blocks/TestBlock.vue";

// import PrimeBlock from "@/Blocks/PrimeBlock.vue";
// import SecondBlock from "@/Blocks/SecondBlock.vue";
// import ForthBlock from "@/Blocks/ForthBlock.vue";
import ThirdBlock from "@/Blocks/ThirdBlock.vue";

export default {
  components: {
    // TestBlock,
    // PrimeBlock,
    // SecondBlock,
    // ForthBlock,
    ThirdBlock,
  },
  props: {},
  method: {},
};
</script>

<style lang="scss" scoped>
.FonSite {
  @include center;
}
.PrimeBlock {
  width: 100%;
}
</style>
