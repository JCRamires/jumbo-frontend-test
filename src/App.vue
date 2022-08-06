<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useStore } from "./stores/jumboStores";

import Header from "./components/Header.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchStores");
});

const isLoading = computed(() => store.state.isLoading);
</script>

<template>
  <Header />
  <main class="p-5 pt-24 min-h-screen w-full bg-slate-100">
    <section class="w-11/12 md:w-10/12 m-auto shadow p-5 bg-white border rounded">
      <div v-if="isLoading">Loading</div>
      <router-view v-else></router-view>
    </section>
  </main>
</template>
