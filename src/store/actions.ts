import { ActionTree } from "vuex";
import { State } from "./types";

export const actions: ActionTree<State, any> = {
    async fetchStores(context) {
      context.commit("setIsLoading", true);
      const response = await fetch(
        "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e"
      );
      const storesJson = await response.json();
      context.commit("setStores", storesJson);
      context.commit("setIsLoading", false);
    },
  };