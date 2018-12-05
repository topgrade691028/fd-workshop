<template>
  <div>
    <Search label="hero" :items="items"></Search>
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
