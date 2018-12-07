<template>
  <div>
    <div class="large-block">
      <h1>Scroll down..</h1>
    </div>
    <Observer>
      <MapExample v-if="intersected" slot-scope="{ intersected }"/>
    </Observer>
  </div>
</template>

<script>
import Observer from "./Observer";

export default {
  components: {
    Observer,
    MapExample: () => import("./MapExample")
  }
};
</script>

<style scoped>
.large-block {
  height: 200vh;
  background: #bed7fd;
}
</style>




