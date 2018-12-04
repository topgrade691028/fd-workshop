<template>
  <multiselect v-bind="$props" v-on="$listeners"></multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";
import MultiselectMixin from "vue-multiselect/src/multiselectMixin";

export default {
  components: {
    Multiselect
  },
  mixins: [{ props: MultiselectMixin.props }]
};
</script>

<style lang="scss" scoped>
$color: #9c21cc;

.multiselect /deep/ .multiselect__option--highlight {
  background: $color;

  &::after {
    background: darken($color, 10%);
  }
}
</style>
