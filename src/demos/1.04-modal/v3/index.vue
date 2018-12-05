<template>
  <div class="modal-demo">
    <button @click="openModal">Open Modal</button>
    <Modal modal-id="demo-3-modal"/>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  components: {
    Modal
  },
  methods: {
    openModal() {
      this.$store.commit("app/modals/setModal", {
        modal: "demo-3-modal",
        open: true
      });
    }
  }
};
</script>
