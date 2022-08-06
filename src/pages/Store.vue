<script setup lang="ts">
import { useRoute } from "vue-router";
import { JumboStore, useStore } from "../stores/jumboStores.js";
import StoreDetails from "../components/StoreDetails.vue";

const store = useStore();
const route = useRoute();

const jumboStore: JumboStore = store.getters.getStoreById(route.params.id);
</script>

<template>
  <section class="prose max-w-none">
    <h1>{{ jumboStore.addressName }}</h1>
    <StoreDetails :store="jumboStore" />
  </section>
</template>
