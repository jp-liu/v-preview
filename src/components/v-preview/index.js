import VPreview from "./src/preview.vue";

VPreview.install = function (Vue) {
  Vue.component(VPreview.name, VPreview);
};

export default VPreview;
