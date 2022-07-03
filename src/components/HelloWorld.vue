<template>
  <div class="hello">
    <VImage :image="images"></VImage>
  </div>
</template>

<script>
import VImage from "./v-image";
export default {
  name: "HelloWorld",
  components: { VImage },
  props: {
    msg: String,
  },
  data() {
    return {
      images: [
        "https://picsum.photos/200/200",
        "https://picsum.photos/300/200",
        "https://picsum.photos/250/200",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
