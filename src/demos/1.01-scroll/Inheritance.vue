<template>
  <div :style="{ background: color }" class="demo-scroll">Current color: {{ color }}</div>
</template>

<script>
import Scroll from "./scroll";

export default {
  extends: Scroll,
  data: () => ({
    color: "red"
  }),
  methods: {
    handleScrollChange(status) {
      this.color = status === "in" ? "red" : "blue";
    }
  }
};
</script>

<style scoped>
.demo-scroll {
  height: 300vh;
}
</style>
