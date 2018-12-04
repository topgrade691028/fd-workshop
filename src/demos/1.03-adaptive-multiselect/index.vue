<template>
  <div class="bridge-demo">
    <div>
      <h4>Single Select</h4>
      <SingleSelect v-model="singleValue" :options="options" label="name" track-by="name"/>
    </div>

    <div>
      <h4>Multi Select</h4>
      <MultiSelect v-model="multiValue" :options="options" label="name" track-by="name"/>
    </div>

    <div>
      <h4>Image Select</h4>
      <ImageSelect
        v-model="imageValue"
        :options="imageOptions"
        label="title"
        track-by="title"
        :show-labels="false"
      />
    </div>
  </div>
</template>

<script>
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import ImageSelect from "./ImageSelect";

export default {
  components: {
    SingleSelect,
    MultiSelect,
    ImageSelect
  },
  data: () => ({
    singleValue: null,
    multiValue: [],
    imageValue: null,
    options: [
      { name: "Vue.js", language: "JavaScript" },
      { name: "Adonis", language: "JavaScript" },
      { name: "Rails", language: "Ruby" },
      { name: "Sinatra", language: "Ruby" },
      { name: "Laravel", language: "PHP" },
      { name: "Phoenix", language: "Elixir" }
    ],
    imageOptions: [
      {
        title: "Random image",
        desc: "Lorem ipsum dolo",
        img: "https://picsum.photos/300/150"
      },
      {
        title: "Cool image",
        desc: "Accusantium veritatis nesciunt quaerat debitis",
        img: "https://picsum.photos/300/151"
      },
      {
        title: "Another cool one",
        desc: "Sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/300/152"
      }
    ]
  })
};
</script>

<style scoped>
.bridge-demo > * {
  margin: 35px 0;
}
</style>
