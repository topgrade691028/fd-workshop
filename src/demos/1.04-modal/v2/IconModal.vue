<template>
  <BaseModal v-bind="$props" v-on="$listeners">
    <!-- Modal Body -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Nihil similique nesciunt odio, at reiciendis, ducimus delectus dolorem quia rem veniam, obcaecati possimus neque veritatis? Dignissimos fugit quos cupiditate cum! Porro.</p>
    <p>
      Excepteur sint occaecat
      <b>cupidatat non proident</b>, sunt in culpa qui officia deserunt mollit anim id est laborum
    </p>

    <!-- Modal Header -->
    <div class="header-content" slot="header">
      <svg class="icon icon-home3">
        <use xlink:href="#icon-home3"></use>
      </svg>
      <symbol id="icon-home3" viewBox="0 0 32 32">
        <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
      </symbol>
      <h3>Go Home Modal</h3>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal";

export default {
  components: {
    BaseModal
  },
  props: ["open", "title"]
};
</script>

<style scoped>
.header-content {
  display: flex;
  align-items: center;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  margin-right: 12px;
}
</style>
