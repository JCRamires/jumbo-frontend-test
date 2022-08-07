import { GetterTree } from "vuex";
import { JumboStore, State } from "./types";

export const getters: GetterTree<State, any> = {
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
      return cities.filter((city) =>
        city.toLowerCase().includes(cityName.toLowerCase())
      );
    },
    getStores(state): JumboStore[] {
      const jumboStores = state.stores.map((jumboStore) => ({
        ...jumboStore,
        addressName: jumboStore.addressName.slice(6),
      }));
      return jumboStores;
    },
    getStoreById: (_, getters) => (storeId: string): JumboStore =>
      getters.getStores.filter(
        (jumboStore: JumboStore) => jumboStore.sapStoreID === storeId
      )[0],
    getStoresByCity: (_, getters) => (cityName: string): JumboStore[] =>
      getters.getStores.filter(
        (jumboStore: JumboStore) =>
          jumboStore.city.toLowerCase() === cityName.toLowerCase()
      ),
    getStoresBySearchTerm: (_, getters) => (searchTerm: string): JumboStore[] =>
      getters.getStores.filter(
        (jumboStore: JumboStore) =>
          jumboStore.addressName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          jumboStore.city.toLowerCase().includes(searchTerm.toLowerCase())
      ),
  };