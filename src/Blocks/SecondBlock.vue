<template>
  <div class="primeClass mt-5">
    <p class="smallText">Get to know</p>
    <p class="simpleText">About Me</p>
    <v-container>
      <v-divider
        :thickness="10"
        class="border-opacity-100 dividerButtom"
        inset
      ></v-divider>
    </v-container>
    <div class="BlockOne">
      <v-img
        :width="300"
        aspect-ratio="16/9"
        cover
        src="../../public/SavciucMaxim.jpg"
      ></v-img>

      <v-card>
        <v-list :items="textAboutMeAll" />

        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textAboutMeAll: [
        "I have specialized in Vue 2 Framework, PostgreSQL, OracleSQL, C# and .NET Framework,.",
        "Currently, I am actively studying Vue.js 2.",
        "I have a strong enthusiasm for technology that motivates me to consistently acquire new skills and adapt to evolving challenges.",
        "I'm a quick learner and thrive in collaborative environments that foster creativity and innovation.",
      ],
    };
  },
  props: {},
  method: {},
};
</script>

<style scoped lang="scss">
.primeClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Libre Baskerville", serif;
}
.smallText {
  font-size: 10px;
}
.simpleText {
  margin-top: -15px;
}
.dividerButtom {
  margin-top: -20px;
  color: darkblue;
}
.BlockOne {
  display: flex;
}
</style>
