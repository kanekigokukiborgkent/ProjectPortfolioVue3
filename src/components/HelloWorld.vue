<template>
  <div class="FonSite">
    <div class="PrimeBlock">
      <PrimeBlock />
      <SecondBlock />
      <ThirdBlock />
      <ForthBlock />
    </div>
  </div>
</template>

<script>
import PrimeBlock from "@/Blocks/PrimeBlock.vue";
import SecondBlock from "@/Blocks/SecondBlock.vue";
import ThirdBlock from "@/Blocks/ThirdBlock.vue";
import ForthBlock from "@/Blocks/ForthBlock.vue";

export default {
  components: {
    PrimeBlock,
    SecondBlock,
    ThirdBlock,
    ForthBlock,
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
  width: 1080px;
}
</style>
