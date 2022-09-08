import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useApplicantStore = defineStore("applicant", () => {
  const list_offers_favorite = ref([]);
  const list_offers_suggested = ref([]);
  const list_offers_apply = ref([]);
  const email = ref("");
  const name = ref("");

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return {
    list_offers_favorite,
    list_offers_suggested,
    list_offers_apply,
    email,
    name
  };
});
