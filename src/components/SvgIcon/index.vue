<template>
  <div>
    <!-- svg:图标外层节点，内部与use配合使用 -->
    <svg :style="{ width, height }" :fill="color">
      <use :xlink:href="prefix + name"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  //使用图标前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  //名字
  name: String,
  //颜色
  color: {
    type: String,
    default: "",
  },
  //宽度
  width: {
    type: String,
    default: "16px",
  },
  //高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style scoped></style>
