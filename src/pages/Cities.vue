<script setup lang="ts">
import { useStore } from "../stores/jumboStores";

const store = useStore();

const cities = store.getters.getCities;
</script>

<template>
  <section class="prose">
    <h1 class="">Cities with Jumbo stores</h1>
    <ul>
      <li v-for="city in cities">
        <router-link :to="`/cities/${city}`">{{ city }}</router-link>
      </li>
    </ul>
  </section>
</template>
