<template>
  <Scroll @scrollChange="handleScrollChange">
    <div :style="{ background: color }" class="demo-scroll">Current color: {{ color }}</div>
  </Scroll>
</template>

<script>
import Scroll from "./Scroll";

export default {
  components: {
    Scroll
  },
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
