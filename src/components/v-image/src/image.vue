<template>
  <viewer :images="images">
    <img
      v-for="(item, idx) in images"
      class="v-image"
      v-bind="item"
      :src="item.src"
      :key="item.src + idx"
    />
  </viewer>
</template>

<script>
import Vue from "vue";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);

export default {
  name: "VExcel",
  props: {
    image: [String, Array],
  },
  computed: {
    images() {
      if (typeof this.image === "string") {
        return [{ str: this.image }];
      }
      if (Array.isArray(this.image)) {
        if (this.image[0] && typeof this.image[0] === "string") {
          return this.image.map((img) => ({ src: img }));
        }
        return this.image;
      }
      return [];
    },
  },
};
</script>

<style lang="less" scoped></style>
