<script setup lang="ts">
import { useStore } from "../stores/jumboStores";
import debounce from "lodash/debounce";
import { reactive } from "vue";
import { computed } from "@vue/reactivity";

import StoresList from "../components/StoresList.vue";

const state = reactive({ searchTerm: "" });

const store = useStore();

function onChangeSearchTerm(event: Event) {
  state.searchTerm = (event.target as HTMLInputElement).value;
}

const debouncedOnChangeSearchTerm = debounce(onChangeSearchTerm, 300);

const jumboStores = computed(() =>
  store.getters.getStoresBySearchTerm(state.searchTerm)
);
</script>

<template>
  <section>
    <div class="prose">
      <h1 class="font-bold mb-2">Jumbo Stores</h1>
      <div class="mb-6">
        <label>
          Search
          <input
            class="shadow border rounded py-2 px-3"
            @input="debouncedOnChangeSearchTerm"
            placeholder="by name or city"
          />
        </label>
      </div>
    </div>
    <StoresList v-if="jumboStores.length" :stores="jumboStores" />
    <div v-else>No results</div>
  </section>
</template>
