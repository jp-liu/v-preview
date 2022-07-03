import VExcel from "./src/excel.vue";

VExcel.install = function (Vue) {
  Vue.component(VExcel.name, VExcel);
};

export default VExcel;
