<template>
  <div>
    <Tooltip v-if="showTooltip"/>
    <button @click="showTooltip = true">Show Tooltip</button>
  </div>
</template>

<script>
export default {
  components: {
    Tooltip: () => ({
      component: import("./Tooltip"),
      loading: AwesomeSpinner,
      error: SadFaceComponent,
      timeout: 5000,
      delay: 200
    })
  }
};
</script>



