<template>
  <div>
    <slot/>
  </div>

  <multiselect
    v-model="value"
    label="title"
    track-by="title"
    :options="options"
    :option-height="104"
    :custom-label="customLabel"
    :show-labels="false"
  >
    <template slot="singleLabel" slot-scope="props">
      <img class="option__image" :src="props.option.img" alt="No Man’s Sky">
      <span class="option__desc">
        <span class="option__title">{{ props.option.title }}</span>
      </span>
    </template>
    <template slot="option" slot-scope="props">
      <img class="option__image" :src="props.option.img" alt="No Man’s Sky">
      <div class="option__desc">
        <span class="option__title">{{ props.option.title }}</span>
        <span class="option__small">{{ props.option.desc }}</span>
      </div>
    </template>
  </multiselect>

  <multiselect
    placeholder="Pick at least one"
    select-label="Enter doesn’t work here!"
    :value="value"
    :options="options"
    :multiple="true"
    :searchable="true"
    :allow-empty="false"
    :hide-selected="true"
    :max-height="150"
    :max="3"
    :disabled="isDisabled"
    :block-keys="['Tab', 'Enter']"
    @input="onChange"
    @close="onTouch"
    @select="onSelect"
  ></multiselect>
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