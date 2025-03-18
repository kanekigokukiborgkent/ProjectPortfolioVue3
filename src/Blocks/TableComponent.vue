<template>
  <v-table>
    <thead>
      <tr>
        <th></th>
        <th v-for="header in tableData" :key="header.name" class="headerTable">
          {{ header.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="column in columns" :key="column.field" class="rowStyle">
        <td>{{ column.field }}</td>
        <td>{{ column.label1 }}</td>
        <td>{{ column.label2 }}</td>
        <td>{{ column.label3 }}</td>
        <td>{{ column.label4 }}</td>
        <td>{{ column.label5 }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
// import callApiBack from "@/callFunctions/callApiBack.js";

export default {
  name: "TableComponent",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.callFunctionFromBack();
    // console.log("tableData", JSON.parse(JSON.stringify(this.tableData)));
    // console.log("columns", JSON.parse(JSON.stringify(this.columns)));
  },
  methods: {
    async callFunctionFromBack() {
      try {
        // let apiData = {
        //   username: "Maxim Savciuc",
        // };
        // let res = await fetch(
        //   "http://localhost:7214/api/user/languageSkills/Maxim%20Savciuc"
        // );
        let res = await fetch(
          "http://localhost:5080/api/user/languageSkills/Maxim%20Savciuc"
        );

        //await callApiBack.getDateFromRegistru(apiData);
        console.log("res", res);
      } catch (e) {
        console.log("e", e);
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.headerTable {
  min-width: 100px;
  max-width: 100px;
  background-color: #f4f4f4;
}
.rowStyle:hover {
  transition: transform 0.5s ease-in-out;
  background-color: #f4f4f4;
}
</style>
