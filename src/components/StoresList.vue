<script setup lang="ts">
import { JumboStore } from '../store/types';
import StoreListItem from './StoreListItem.vue'

interface Props {
  stores: JumboStore[];
}

const { stores } = defineProps<Props>();
</script>

<template>
  <div class="grid md:grid-cols-[repeat(auto-fit,_minmax(25vw,_1fr))] gap-2">
    <StoreListItem v-for="store in stores" :store="store" />
  </div>
</template>
