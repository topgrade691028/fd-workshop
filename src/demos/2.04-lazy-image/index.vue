<template>
  <div>
    <p v-for="img in imgs" :key="img">
      <!-- Try changing v-lazy-image to img -->
      <v-lazy-image class="image" :src="img"/>

      <!-- For pre-load with margin, use intersection-options -->
      <!-- <v-lazy-image class="image" :src="img" :intersection-options="{ rootMargin: '3000px' }"/> -->
    </p>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

// Create 100 random images
const imgs = [];
for (let i = 0; i < 99; i++) {
  const size = i.toString().padStart(3, "0");
  imgs.push(`https://picsum.photos/2000/1${size}`);
}

export default {
  components: {
    VLazyImage
  },
  data: () => ({
    imgs
  })
};
</script>

<style scoped>
.large-block {
  height: 200vh;
  background: #bed7fd;
}

.image {
  max-width: 100%;
  min-height: 200px;
}
</style>

