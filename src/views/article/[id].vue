<template>
  <div class="article-detils">
    <div class="catalog"></div>

    <MdCatalog
      class="catalog catalog-fixed"
      :editorId="id"
      :scrollElement="scrollElement"
    />
    <div>
      <h2 style="text-align: center">{{ art[0]?.title }}</h2>
      <div style="text-align: center">{{ art[0]?.bf }}</div>
      <div class="article-box">
        <MdPreview
          style=""
          :editorId="id"
          :modelValue="art[0].content"
          :theme="theme.value"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticleDetils } from "@/api/init";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useTheme } from "@/hooks/useTheme";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const { theme } = useTheme();

const id = "preview-only";
const text = ref("# Hello Editor");
const scrollElement = document.documentElement;

const articleId: any = useRoute().params?.id;

const art = await getArticleDetils(articleId);
</script>

<style scoped lang="scss">
@import "@/assets/index.scss";
.article-detils {
  display: flex;
  .catalog {
    width: 200px !important;
    overflow: hidden;
  }
  .catalog-fixed {
    position: fixed;
    left: 16px;
  }
}
#preview-only {
  width: calc(100vw - $right-width - 200px - 32px);
  flex: 1;
}
.article-box {
  width: calc(100vw - $right-width - 200px - 32px);
}
</style>
