import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface JumboStore {
  addressName: string;
  city: string;
  collectionPoint: boolean;
  complexNumber: string;
  distance: number;
  favourite: boolean;
  isHomeStore: boolean;
  latitude: string;
  locationType: string;
  longitude: string;
  newStore: number;
  postalCode: string;
  sapStoreID: string;
  showWarningMessage: boolean;
  street: string;
  street2: string;
  street3: string;
  sundayOpen: true;
  todayClose: string;
  todayOpen: string;
  type: string;
  uuid: string;
}

export interface State {
  isLoading: boolean;
  stores: JumboStore[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const jumboStores = createStore<State>({
  state() {
    return {
      isLoading: true,
      stores: [],
    };
  },
  getters: {
    getCities(state) {
      const citiesSet = state.stores.reduce((acc, store) => {
        if (store.city) {
          acc.add(store.city);
        }

        return acc;
      }, new Set<string>());

      return citiesSet;
    },
    getCitiesByName: (_, getters) => (cityName: string) => {
      const cities: string[] = Array.from(getters.getCities);
      return cities.filter((city) => city.toLowerCase().includes(cityName.toLowerCase()));
    },
    getStores(state): JumboStore[] {
      const jumboStores = state.stores.map((jumboStore) => ({
        ...jumboStore,
        addressName: jumboStore.addressName.slice(6),
      }));
      return jumboStores;
    },
    getStoreById: (_, getters) => (storeId: string) =>
      getters.getStores.filter(
        (jumboStore: JumboStore) => jumboStore.sapStoreID === storeId
      )[0],
    getStoresByCity: (_, getters) => (cityName: string) =>
      getters.getStores.filter(
        (jumboStore: JumboStore) => jumboStore.city.toLowerCase() === cityName.toLowerCase()
      ),
    getStoresBySearchTerm: (_, getters) => (searchTerm: string) =>
      getters.getStores.filter(
        (jumboStore: JumboStore) =>
          jumboStore.addressName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          jumboStore.city.toLowerCase().includes(searchTerm.toLowerCase())
      ),
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setStores(state, stores) {
      state.stores = stores;
    },
  },
  actions: {
    async fetchStores(context) {
      context.commit("setIsLoading", true);
      const response = await fetch(
        "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e"
      );
      const storesJson = await response.json();
      context.commit("setStores", storesJson);
      context.commit("setIsLoading", false);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
