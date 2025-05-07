<template>
  <div class="primeClass mt-5">
    <p class="smallText">I specialise in</p>
    <div>
      <p class="simpleText">My Skills</p>
      <v-divider
        :thickness="10"
        class="border-opacity-100 dividerButtom"
      ></v-divider>
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in allMySkills"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="cardListItem">
            <div class="HeadCarditem">
              <v-img :src="item.image" class="imageItem" />
              <v-card-title class="description">{{ item.title }}</v-card-title>
            </div>

            <v-card-subtitle class="description descriptionTwo mt-3">
              {{ item.description }}
            </v-card-subtitle>

            <div class="iconItem">
              <v-icon color="primary">mdi-chevron-right</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getMySkillsData } from "../Functions/SkillsData.js";
export default {
  data() {
    return {
      allMySkills: [],
    };
  },
  components: {},
  created() {
    this.getSkillsData();
  },
  methods: {
    getSkillsData() {
      this.allMySkills = getMySkillsData();
    },
  },
};
</script>

<style lang="scss" scoped>
.primeClass {
  @include center;
  flex-direction: column;
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
  color: $primary-color;
}
.description {
  font-size: $font-size;
  white-space: normal;
}
.descriptionTwo {
  display: -webkit-box;
}
.cardListItem {
  min-height: 150px;
  width: 280px;
  max-height: 150px;
  max-width: 280px;
}
.HeadCarditem {
  margin: 10px;
  display: flex;
  align-items: center;
}
.imageItem {
  padding: 20;
  max-width: 50px;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.iconItem {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 90%;
}
.iconItem:hover {
  background-color: #e0e2e1;
  border-radius: 50%;
  transform: scale(1.2);
}

.iconItem:active {
  background-color: #c7c7c8;
  transform: scale(0.9);
}
</style>
