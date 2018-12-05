<template>
  <div class="search">
    <div>
      <slot name="input" :search-query="searchQuery">
        <input v-model="searchQuery" type="text">
      </slot>
    </div>
    <div>
      <slot name="results" :items="filteredItems">
        <ul>
          <li v-for="item in filteredItems" :key="item[label]">{{ item[label] }}</li>
        </ul>
      </slot>
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
