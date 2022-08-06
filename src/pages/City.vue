<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "../stores/jumboStores.js";

const route = useRoute();
const store = useStore();

const cityName = route.params.cityName;
const jumboStores = store.getters.getStoresByCity(cityName);
</script>

<template>
  <section class="prose">
    <h1>Jumbo stores in {{ cityName }}</h1>
    <ul>
      <li v-for="store in jumboStores">
        <router-link :to="`/stores/${store.sapStoreID}`">{{
          store.addressName
        }}</router-link>
      </li>
    </ul>
  </section>
</template>
