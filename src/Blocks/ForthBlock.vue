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
    <!-- <template>
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
    </template> -->

    <template>
      <v-data-table
        :headers="headers"
        :items="items"
        item-key="name"
        hide-default-footer
      ></v-data-table>
    </template>
  </div>
</template>

<script>
import { getMyLanguages } from "../Functions/SkillsData.js";
// import callApiBack from "@/callFunctions/callApiBack.js";

export default {
  data() {
    return {
      allMyLanguages: [],
      // headers: [],
      // items: [],

      headers: [
        { title: "Pyramid", value: "name" },
        { title: "Location", value: "location" },
        { title: "Construction Date", value: "constructionDate" },
        {
          title: "Dimensions",
          align: "center",
          children: [
            { title: "Height(m)", value: "height" },
            { title: "Base(m)", value: "base" },
            { title: "Volume(m³)", value: "volume" },
          ],
        },
      ],
      items: [
        {
          name: "Great Pyramid of Giza",
          location: "Egypt",
          height: "146.6",
          base: "230.4",
          volume: "2583285",
          constructionDate: "c. 2580–2560 BC",
        },
        {
          name: "Pyramid of Khafre",
          location: "Egypt",
          height: "136.4",
          base: "215.3",
          volume: "1477485",
          constructionDate: "c. 2570 BC",
        },
        {
          name: "Red Pyramid",
          location: "Egypt",
          height: "104",
          base: "220",
          volume: "1602895",
          constructionDate: "c. 2590 BC",
        },
        {
          name: "Bent Pyramid",
          location: "Egypt",
          height: "101.1",
          base: "188.6",
          volume: "1200690",
          constructionDate: "c. 2600 BC",
        },
        {
          name: "Pyramid of the Sun",
          location: "Mexico",
          height: "65",
          base: "225",
          volume: "1237097",
          constructionDate: "c. 200 CE",
        },
      ],
    };
  },
  async created() {
    // this.callFunctionFromBack();
    await this.getLanguagesData();
    this.getHeaders();
    this.getSecondHeaders;
  },
  methods: {
    getLanguagesData() {
      this.allMyLanguages = getMyLanguages();
      console.log("this.allMyLanguages", this.allMyLanguages);
    },
    getHeaders() {
      this.allMyLanguages.arraySkills.forEach((element) => {
        this.headers.push(element.category[0].columnParent);
      });
      console.log(this.headers);
    },
    getItems() {
      this.allMyLanguages.arraySkills.forEach((element) => {
        this.items.push(element.category[0].columnChild);
      });
      console.log(this.items);
    },

    //   async callFunctionFromBack() {
    //     try {
    //       // let apiData = {
    //       //   username: "Maxim Savciuc",
    //       // };
    //       // let res = await fetch(
    //       //   "http://localhost:7214/api/user/languageSkills/Maxim%20Savciuc"
    //       // );
    //       let res = await fetch(
    //         "http://localhost:5080/api/user/languageSkills/Maxim%20Savciuc"
    //       );

    //       //await callApiBack.getDateFromRegistru(apiData);
    //       console.log("res", res);
    //     } catch (e) {
    //       console.log("e", e);
    //     }
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
