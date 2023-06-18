<!--
 * @Descri
  components: { themeSwitch },
  components: { themeSwitch },ption: 
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 17:33:57
-->

<script lang="ts">
export default {
  name: "home",
};
</script>
<script setup lang="ts">
import themeSwitch from "@/components/theme-switch/theme-switch.vue";
import { ref } from "vue";
import { ClientOnly } from "vite-ssr";
import { Icon } from "@iconify/vue";
import { getClass } from "@/api/init";
import { useTheme } from "vuetify";
const theme = useTheme();

const switchText = ref({
  type: "icon",
  name: "icon-light-on",
});

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");

const isLight = ref(theme.global.current.value.dark);
// import {} from "@iconify/vue/"
const showSetCard = ref(false);
const drawer = ref(false);

const group = await getClass();

const themeSet = () => {
  showSetCard.value = !showSetCard.value;
};

const closeThemeBox = () => {
  showSetCard.value = false;
};
const include = () => {
  return [document.querySelector(".theme-btn")];
};
</script>

<template>
  <v-app class="app-main">
    <v-card width="100%" class="mx-auto" variant="flat">
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-layout class="layout-main">
        <v-app-bar class="nav" color="dark">
          <!-- image="https://picsum.photos/1920/1080?random" -->
          <!-- <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template> -->

          <template v-slot:prepend>
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title
            ><router-link to="/">yulinZ Blogs</router-link>
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <z-switch v-model="isLight" @change="toggleTheme()"></z-switch>
          </v-btn>
          <!-- <v-btn class="theme-btn" icon @click.stop="themeSet">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
        </v-app-bar>

        <v-main style="border: none">
          <v-container fluid>
            <v-card
              v-click-outside="{ handler: closeThemeBox, include }"
              max-width="200px"
              class="set-card_content"
            >
              <v-main style="padding: 0">
                <v-container fluid class="theme-p">
                  <theme-switch v-show="showSetCard" />
                </v-container>
              </v-main>
            </v-card>
            <div class="app-body" style="display: flex">
              <div style="flex: auto">
                <router-view></router-view>
              </div>
              <div class="group-box"></div>

              <div class="group-box group-box-fixed" style="position: fixed">
                <h3>分类</h3>
                <div>
                  <ClientOnly>
                    <v-chip
                      class="ma-2"
                      style="display: inline-flex"
                      v-for="(item, index) in group"
                      :key="item.id"
                      color="secondary"
                      label
                    >
                      <Icon v-if="item?.icon" :icon="item?.icon" />
                      {{ item.name }}
                    </v-chip>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style scoped lang="scss">
@import "@/assets/index.scss";
.app-main {
  header {
    position: fixed !important;
  }
  .set-card_content {
    padding: 0;
    width: 200px;
    position: fixed;
    right: 0;
    top: 64px;
    z-index: 1000;
    right: 0;
  }
  .theme-p {
    padding: 0 !important;
  }
  .group-box {
    display: block;
    text-align: center;
    width: $right-width;
    margin: 16px 0 0 0.5rem;
    // right: 16px;
    flex: none;
  }
  .group-box-fixed {
    border-radius: 8px;
    box-shadow: $border-shad;
    right: 0;
    > h3 {
      text-align: left;
      padding: 8px;
    }
  }
}
</style>
