import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../services/axios/instance";
import subscribe from "../services/sse/subscribe.vue";

export const useApplicantStore = defineStore("applicant", () => {
  const userProfile = ref({
    bullhorn_id: "",
    name: "",
    email: "",
    list_offers_apply: [],
    list_offers_suggested: [],
    list_offers_apply: [],
  });

  const SetUserProfile = async (commit) => {
    const response = await instance.get("applicants/").catch((err) => {
      console.log(err);
    });

    if (response && response.data) {
      userProfile.value = response.data;
      subscribe.setup(userProfile.value.bullhorn_id);
    }
  };

  return {
    userProfile,
    SetUserProfile
  };
});
