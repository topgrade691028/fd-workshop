
<template>
  <div class="modal-container" v-if="open">
    <div class="modal-backdrop" @click="close"></div>

    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h3>{{ title }}</h3>
          <button @click="close" class="close-button">X</button>
        </slot>
      </header>

      <div class="modal-body">
        <slot/>
      </div>

      <footer class="modal-footer">
        <slot name="footer">
          <button @click="$emit('accept')">Ok</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["open", "title"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>


<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 90;
}

.modal {
  position: relative;
  background: white;
  width: 500px;
  max-height: 80vh;
  z-index: 100;
}

.modal-header,
.modal-body,
.modal-footer {
  padding: 6px 12px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.close-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
