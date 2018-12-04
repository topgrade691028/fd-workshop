<template>
  <!-- 
  Problem with v-bind and v-on overriding 
  <multiselect
    v-bind="$props"
    v-on="$listeners"
    label="name"
    track-by="name"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    :preserve-search="true"
    :preselect-first="true"
  ></multiselect>-->
  <multiselect v-bind="mergedProps" v-on="$listeners"></multiselect>
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
    mergedProps() {
      return {
        ...this.$props,
        multiple: true,
        closeOnSelect: false,
        clearOnSelect: false,
        preserveSearch: true,
        preselectFirst: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #2199cc;

.multiselect /deep/ {
  .multiselect__tag {
    background: $color;
  }

  .multiselect__tag-icon {
    &:focus,
    &:hover {
      background: darken($color, 10%);
    }
  }
}
</style>
