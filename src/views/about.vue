<!--
 * @Description: 
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 14:05:52
-->
<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { getViewAboutInitData } from "@/api/init";
import { useHead } from "@vueuse/head";
import arcCard from "@/components/arc-card/arc-card.vue";

const state = await getViewAboutInitData();
console.log(state);
useHead({
  title: "yulinZ blogs",
  meta: [
    {
      name: "description",
      content: "about",
    },
    {
      name: "keywords",
      content: "yulinZ blogs",
    },
  ],
});
</script>

<template>
  <div class="view-about">
    <arc-card />
    <p>
      {{ state }}
    </p>
  </div>
</template>

<style scoped lang="less">
.view-about {
  padding: 24px;
}
</style>
