<template>
  <div class="modal-demo">
    <button @click="setModalOpen('modalOpen', true)">Open Modal</button>
    <Modal :open="modalOpen" @close="setModalOpen('modalOpen', false)" @accept="saveData($event)"/>

    <button @click="setModalOpen('iconModalOpen', true)">Open Icon Modal</button>
    <IconModal
      :open="iconModalOpen"
      @close="setModalOpen('iconModalOpen', false)"
      @accept="setModalOpen('iconModalOpen', false)"
    />
  </div>
</template>

<script>
import Modal from "./Modal";
import IconModal from "./IconModal";

export default {
  components: {
    Modal,
    IconModal
  },
  data: () => ({
    modalOpen: false,
    iconModalOpen: false
  }),
  methods: {
    setModalOpen(modalKey, isOpen) {
      this[modalKey] = isOpen;
    },
    saveData(data) {
      // eslint-disable-next-line
      console.log(data);
      this.setModalOpen("modalOpen", false);
    }
  }
};
</script>
