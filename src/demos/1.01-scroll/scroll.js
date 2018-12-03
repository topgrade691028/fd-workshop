export default {
  methods: {
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
