import { computed } from "vue";
import { useTheme as vuetifyTheme } from "vuetify";

export function useTheme() {
  const theme: any = computed(() => {
    return vuetifyTheme().global.name;
  });

  const toggleTheme = () =>
    (theme.value = vuetifyTheme().global.current.value.dark ? "light" : "dark");

  return {
    theme,
    toggleTheme,
  };
}
