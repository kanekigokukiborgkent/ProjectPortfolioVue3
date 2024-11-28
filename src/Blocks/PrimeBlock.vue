<template>
  <div class="primeClass mt-5">
    <div>
      <h5 class="nameClass">
        {{ name }}
      </h5>
    </div>
    <div class="profClass mt-5">
      <p>{{ profession }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "SAVCIUC MAXIM,",
      profession: "FRONTEND WEB DEVELOPER",
    };
  },
  props: {},
  method: {},
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap");

.primeClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Libre Baskerville", serif;
}
.nameClass {
  //  font-weight: 1000;
  // background: linear-gradient(
  //  to right,
  // rgba(33, 154, 169, 1) 0%,
  // rgb(20, 181, 181) 35%,
  //rgba(17, 173, 205, 1) 100%
  //);
  //-webkit-text-fill-color: transparent;
  // -webkit-background-clip: text;
}
.profClass {
}
</style>
