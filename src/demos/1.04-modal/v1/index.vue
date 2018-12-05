<template>
  <div class="modal-demo">
    <button @click="setModal(true)">Open Modal</button>
    <Modal 
      :open="modalOpen" 
      @close="setModal(false)"
      @accept="setModal(false)"
      title="An example modal"
      body="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Odio veritatis velit laborum porro officiis unde fuga tempora dignissimos, ducimus magni, perspiciatis itaque a accusamus illo obcaecati, minima sit repudiandae consectetur?</p>"
      />
      
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  components: {
    Modal
  },
  data: () => ({
    modalOpen: false
  }),
  methods: {
    setModal(isOpen) {
      this.modalOpen = isOpen;
    }
  }
};
</script>
