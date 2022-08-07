import { ActionTree } from "vuex";
import { fetchStores } from "../gateways/storesGateway";
import { State } from "./types";

export const actions: ActionTree<State, any> = {
    async fetchStores(context) {
      context.commit("setIsLoading", true);
      const stores = await fetchStores()
      context.commit("setStores", stores);
      context.commit("setIsLoading", false);
    },
  };