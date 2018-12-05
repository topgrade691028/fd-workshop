<template>
  <div>
    <h2>List (default)</h2>
    <Search label="hero" :items="items"></Search>

    <h2>Comma separated</h2>
    <Search label="hero" :items="items">
      <table slot="results" slot-scope="{ items }">
        <span v-for="item in items" :key="item.hero">{{ item.hero }},</span>
      </table>
    </Search>

    <h2>Table</h2>
    <Search label="hero" :items="items">
      <table slot="results" slot-scope="props">
        <thead>
          <tr>
            <th>Hero</th>
            <th>Real name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in props.items" :key="item.name">
            <td>{{ item.hero }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </Search>
  </div>
</template>

<script>
import Search from "./Search";
import Heroes from "../heroes.json";

export default {
  components: {
    Search
  },
  data: () => ({
    items: Heroes
  })
};
</script>

<style scoped>
.search {
  margin-bottom: 50px;
}
</style>
