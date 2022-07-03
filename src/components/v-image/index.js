import VImage from "./src/image.vue";

VImage.install = function (Vue) {
  Vue.component(VImage.name, VImage);
};

export default VImage;
