<script setup lang="ts">
import { JumboStore } from "../stores/jumboStores.js";
import {
  LocationMarkerIcon,
  OfficeBuildingIcon,
  ClockIcon,
} from "@heroicons/vue/outline";

interface Props {
  store: JumboStore;
}

const { store } = defineProps<Props>();
</script>

<template>
  <router-link :to="`/stores/${store.sapStoreID}`">
    <div class="border rounded shadow p-4 h-full">
      <div class="font-semibold mb-2">{{ store.addressName }}</div>
      <div class="flex gap-1 items-center">
        <LocationMarkerIcon class="h-5 w-5 text-gray-400" />
        <div>{{ store.street }}, {{ store.street2 }}</div>
      </div>
      <div class="flex gap-1 items-center" v-if="store.city">
        <OfficeBuildingIcon class="h-5 w-5 text-gray-400" />
        <div>{{ store.city }}</div>
      </div>
      <div class="flex gap-1 items-center">
        <ClockIcon class="h-5 w-5 text-gray-400" />
        <div>{{ store.todayOpen }} to {{ store.todayClose }}</div>
      </div>
    </div>
  </router-link>
</template>
