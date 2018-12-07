export default {
  props: ["options"],
  data: () => ({
    observer: null,
    intersected: false
  }),
  mounted() {
    const options = this.options || {};

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.intersected = true;
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
  render(h) {
    return h("div", [
      this.$scopedSlots.default({
        intersected: this.intersected
      })
    ]);
  }
};
