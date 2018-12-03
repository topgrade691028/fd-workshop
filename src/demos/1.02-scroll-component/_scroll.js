/*
 *** Alternative 1: Render function ***
 *
 * Use render function to avoid extra <div></div>
 */

export default {
  render() {
    return this.$slots.default && this.$slots.default[0];
  },
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
