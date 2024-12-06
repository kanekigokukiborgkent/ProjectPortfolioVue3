<template>
  <div class="primeClass mt-5">
    <p class="smallText">I speak</p>
    <div>
      <p class="simpleText">My Languages</p>
      <v-divider
        :thickness="10"
        class="border-opacity-100 dividerButtom"
      ></v-divider>
    </div>

    <!-- <v-table>
        <thead>
          <tr>
            <th colspan="2" rowspan="2" class="text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in allMyLanguages" :key="item.category">

                 <td>{{ item.category[0].columnParent }}</td>

                    <tr v-for="it in item.category[0].columnChild" :key="it">

                      <td>{{ it.Action1 }}</td>
                      <td>{{ it.Action2 }}</td>

                    </tr> 

          </tr>
        </tbody>
      </v-table> -->
    <template>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="items"
          item-value="id"
          class="elevation-1"
        >
          <template v-slot:body="{ items }">
            <tr v-for="item in items" :key="item.id">
              <td :colspan="item.isParent ? 2 : 1" class="text-left">
                {{ item.isParent ? item.category : item.Action1 }}
              </td>
              <td v-if="!item.isParent">{{ item.Action2 }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-container>
    </template>
  </div>
</template>

<script>
import { getMyLanguages } from "../Functions/SkillsData.js";
export default {
  data() {
    return {
      allMyLanguages: [],
      headers: [],
      items:[]
    };
  },
async  created() {
  await  this.getLanguagesData();
    this.getHeaders();
    this.getSecondHeaders
  },
  methods: {
    // arraySkills,arrayLanguages
    getLanguagesData() {
      this.allMyLanguages = getMyLanguages();
      console.log(
        "this.allMyLanguages",
        JSON.parse(JSON.stringify(this.allMyLanguages))
      );
    },
    getHeaders() {
      this.allMyLanguages.arraySkills.forEach((element) => {
        this.headers.push(element.category[0].columnParent);
      });
      console.log(JSON.parse(JSON.stringify(this.headers)));
    },
    getItems(){
      this.allMyLanguages.arraySkills.forEach((element) => {
        this.items.push(element.category[0].columnChild);
      });
      console.log(JSON.parse(JSON.stringify(this.items)));

    },
  },
};
</script>

<style lang="scss" scoped>
.primeClass {
  @include center;
  flex-direction: column;
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
</style>
