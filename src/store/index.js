import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    bio_visible: false,
    news_visible: false,
    publication_visible: false,
    education_visible: false,
    tools_visible: false,
    services_visible: false,
    teaching_visible: false,

    bottom_arrived: false,
    offset: false,
  }),
  //   getters: {
  //     doubleCount: (state) => state.count * 2,
  //   },
  //   actions: {
  //     increment() {
  //       this.count++;
  //     },
  //   },
});
