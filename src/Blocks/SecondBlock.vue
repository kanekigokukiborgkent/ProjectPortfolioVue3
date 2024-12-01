<template>
  <div class="primeClass mt-5">
    <p class="smallText">Get to know</p>
    <div>
      <p class="simpleText">About Me</p>
      <v-divider
        :thickness="10"
        class="border-opacity-100 dividerButtom"
      ></v-divider>
    </div>
    <div class="BlockOne">
      <v-img
        class="BlockPhoto mr-5"
        :width="250"
        aspect-ratio="16/9"
        cover
        src="../../public/SavciucMaxim.jpg"
      ></v-img>

      <v-card :width="600">
        <v-list>
          <v-list-item v-for="(item, index) in textAboutMeAll" :key="index">
            <v-list-item-content>
              <v-list-item-title class="smallText text-wrap">
                {{ item }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions> -->
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

<style lang="scss" scoped>
.primeClass {
  @include center;
  flex-direction: column;
  font-family: "Libre Baskerville", serif;
}
.smallText {
  font-size: $font-size;
}
.simpleText {
  margin-top: -15px;
}
.dividerButtom {
  margin-top: -20px;
  color: $primary-color;
}
.BlockOne {
  display: flex;
}
.BlockPhoto {
  border-radius: 5%;
}
</style>
