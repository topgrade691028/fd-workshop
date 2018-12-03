<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      if (window.scrollY > window.innerHeight) {
        this.$emit("scrollChange", "out");
      } else {
        this.$emit("scrollChange", "in");
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