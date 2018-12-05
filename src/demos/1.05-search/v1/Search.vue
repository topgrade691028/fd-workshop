<template>
  <div class="search">
    <div>
      <input v-model="searchQuery" type="text">
    </div>
    <div>
      <ul>
        <li v-for="item in filteredItems" :key="item[label]">{{ item[label] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "label"],
  data: () => ({
    searchQuery: ""
  }),
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item[this.label].toLowerCase().includes(this.searchQuery)
      );
    }
  }
};
</script>
