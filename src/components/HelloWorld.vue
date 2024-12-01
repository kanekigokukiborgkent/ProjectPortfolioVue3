<template>
  <div class="FonSite">
    <div class="PrimeBlock">
      <PrimeBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  </div>
</template>

<script>
import PrimeBlock from "@/Blocks/PrimeBlock.vue";
import SecondBlock from "@/Blocks/SecondBlock.vue";
import ThirdBlock from "@/Blocks/ThirdBlock.vue";

export default {
  components: {
    PrimeBlock,
    SecondBlock,
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
  width: 1080px;
}
</style>
