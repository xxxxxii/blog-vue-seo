import "@/assets/index.scss";
import App from "./App.vue";
import { routes } from "./route";
import viteSSR, { ClientOnly } from "vite-ssr";
import { createHead } from "@vueuse/head";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import ZUI from "v3-yl-ui";
import "../node_modules/v3-yl-ui/dist/style.css";

const options = {
  routes: routes,
};

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  theme: {
    defaultTheme: "light",
  },
});
export default viteSSR(App, options, (context) => {
  const { app } = context;
  const head = createHead();
  app.use(head);
  app.use(vuetify);
  app.use(ZUI);
  app.component(ClientOnly.name, ClientOnly);
  return { head };
});
