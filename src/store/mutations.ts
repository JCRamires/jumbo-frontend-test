import { MutationTree } from "vuex";
import { State } from "./types";

export const mutations: MutationTree<State> = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setStores(state, stores) {
    state.stores = stores;
  },
};
