<template>
  <div :style="{ background: color }" class="demo-scroll">Current color: {{ color }}</div>
</template>

<script>
export default {
  data: () => ({
    color: "red"
  }),
  methods: {
    handleScrollChange(status) {
      this.color = status === "in" ? "red" : "blue";
    },
    handleScroll() {
      if (window.scrollY > window.innerHeight) {
        this.handleScrollChange("out");
      } else {
        this.handleScrollChange("in");
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.demo-scroll {
  height: 300vh;
}
</style>
