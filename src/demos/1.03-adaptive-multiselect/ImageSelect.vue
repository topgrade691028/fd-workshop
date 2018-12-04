<template>
  <multiselect v-bind="allBindings" v-on="$listeners">
    <template slot="singleLabel" slot-scope="{ option }">
      <img class="option__image" :src="option.img" alt="No Man’s Sky">
      <span class="option__desc">
        <span class="option__title">{{ option.title }}</span>
      </span>
    </template>

    <template slot="option" slot-scope="{ option }">
      <img class="option__image" :src="option.img" alt="No Man’s Sky">
      <span class="option__desc">
        <span class="option__title">{{ option.title }}</span>
        <span class="option__small">{{ option.desc }}</span>
      </span>
    </template>
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";
import MultiselectMixin from "vue-multiselect/src/multiselectMixin";

export default {
  components: {
    Multiselect
  },
  mixins: [{ props: MultiselectMixin.props }],
  computed: {
    allBindings() {
      // Need to proxify both props and attrs, for example for showLabels
      return { ...this.$props, ...this.$attrs };
    }
  }
};
</script>

<style lang="scss" scoped>
.multiselect /deep/ {
  .option__image {
    max-height: 100px;
  }

  .option__desc,
  .option__image {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
