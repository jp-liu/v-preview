<template>
  <div class="v-preview">
    <component :is="fileType"></component>
  </div>
</template>

<script>
import VImage from "@/components/v-image";

import { fileTypeMap } from "@/components/util";

export default {
  name: "VPreview",
  comments: {
    VImage,
  },
  props: {
    data: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      fileType: "image",
    };
  },
  computed: {
    /**
     * 修正文件类型，以对应渲染
     */
    fixFileType() {
      if (Array.isArray(this.data)) {
        // this.
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
