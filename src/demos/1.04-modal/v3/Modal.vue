<template>
  <BaseAutoModal title="Auto-Connected Modal" v-bind="$props">
    <!-- Modal Body -->
    This modal is auto-registered in Vuex Store
  </BaseAutoModal>
</template>

<script>
import BaseAutoModal from "./BaseAutoModal";

export default {
  components: {
    BaseAutoModal
  },
  props: ["modalId"]
};
</script>
