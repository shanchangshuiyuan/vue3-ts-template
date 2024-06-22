<template>
  <div>
    <h1>App</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { reqLogin } from "./api/user";

onMounted(() => {
  reqLogin({
    username: "admin",
    password: "111111",
  });
  console.log()
});
</script>

<style lang="scss" scoped></style>
