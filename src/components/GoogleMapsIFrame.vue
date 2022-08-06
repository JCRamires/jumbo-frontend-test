<script setup lang="ts">
interface Props {
  latitude: string;
  longitude: string;
}

const { latitude, longitude } = defineProps<Props>();
</script>

<template>
  <iframe
    width="800"
    height="600"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    :src="`https://maps.google.com/maps?q=${latitude},${longitude}&z=14&amp;output=embed`"
  >
  </iframe>
</template>
