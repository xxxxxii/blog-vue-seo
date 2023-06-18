<!--
 * @Description: 
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 17:17:07
-->
<script setup lang="ts">
import { getClass, getData } from "@/api/init";
import { defineComponent, ref } from "vue";
import dayjs from "dayjs";
import arcCard from "@/components/arc-card/arc-card.vue";
const state = await getData();

const toUrl = (id: string) => {
  window.location.href = "/article/" + id;
};
</script>

<template>
  <div class="view-index">
    <arc-card
      class="card"
      :is-top="item?.type === 1"
      :url="item.id"
      :title="item.title"
      :content="item.bf"
      :date-time="dayjs(item.createdAt).format('YYYY-MM-DD hh:mm')"
      :labels="item?.labels"
      :group="item.group"
      @to-url="toUrl"
      v-for="item in state"
    />
  </div>
</template>

<style scoped lang="less">
.view-index {
  .card {
    margin: 1em 0;
  }
}
</style>
