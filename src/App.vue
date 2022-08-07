<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";

import Header from "./components/Header.vue";
import { useStore } from "./store/store";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchStores");
});

const isLoading = computed(() => store.state.isLoading);
</script>

<template>
  <Header />
  <main class="p-2 md:p-5 pt-20 md:pt-24 min-h-screen w-full bg-slate-100">
    <section class="md:w-10/12 m-auto shadow p-5 bg-white border rounded">
      <div v-if="isLoading">Loading</div>
      <router-view v-else></router-view>
    </section>
  </main>
</template>
