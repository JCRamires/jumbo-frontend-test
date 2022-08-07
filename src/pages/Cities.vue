<script setup lang="ts">
import debounce from "lodash/debounce";
import { reactive } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "../store/store";

const state = reactive({ searchTerm: "" });

const store = useStore();

function onChangeSearchTerm(event: Event) {
  state.searchTerm = (event.target as HTMLInputElement).value;
}

const debouncedOnChangeSearchTerm = debounce(onChangeSearchTerm, 300);

const cities = computed(() => store.getters.getCitiesByName(state.searchTerm));
</script>

<template>
  <section class="prose">
    <h1 class="text-center md:text-left mb-6">Cities with Jumbo stores</h1>
    <div class="mb-6">
      <label>
        Search
        <input
          class="shadow border rounded py-2 px-3"
          @input="debouncedOnChangeSearchTerm"
          placeholder="by city name"
        />
      </label>
    </div>
    <ul v-if="cities.length">
      <li v-for="city in cities">
        <router-link :to="`/cities/${city}`">{{ city }}</router-link>
      </li>
    </ul>
    <div v-else>No results</div>
  </section>
</template>
