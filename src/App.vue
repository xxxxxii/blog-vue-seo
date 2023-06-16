<!--
 * @Descri
  components: { themeSwitch },
  components: { themeSwitch },ption: 
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 17:33:57
-->
<script setup lang="ts">
import themeSwitch from "./components/theme-switch/theme-switch.vue";
import { ref } from "vue";
const showSetCard = ref(false);
const drawer = ref(false);
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

          <v-app-bar-title>Blog</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn class="theme-btn" icon @click.stop="themeSet">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
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
            <div class="app-body">
              <Suspense>
                <router-view></router-view>
              </Suspense>
            </div>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style scoped lang="scss">
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
}
</style>
