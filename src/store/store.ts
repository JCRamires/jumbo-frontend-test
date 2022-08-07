import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { State } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const key: InjectionKey<Store<State>> = Symbol();

export const state = {
  isLoading: true,
  stores: [],
};

export const store = createStore<State>({
  state,
  getters,
  mutations,
  actions,
});

export function useStore() {
  return baseUseStore(key);
}
