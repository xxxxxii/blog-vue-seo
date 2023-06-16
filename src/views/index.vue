<!--
 * @Description: 
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 17:17:07
-->
<script setup lang="ts">
import { getViewAboutInitData } from "@/api/init";
import { defineComponent, ref } from "vue";
import arcCard from "@/components/arc-card/arc-card.vue";

const state = await getViewAboutInitData();
const count = ref(0);
const onButtonClick = () => {
  count.value++;
};
</script>

<template>
  <div class="view-index"><arc-card /></div>

  <!-- {{ state }} -->
</template>

<style scoped lang="less">
.view-index {
  padding: 24px;
}
</style>
