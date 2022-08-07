<script setup lang="ts">
interface Props {
  latitude: string;
  longitude: string;
}

const { latitude, longitude } = defineProps<Props>();
</script>

<template>
  <div class="iframe-container">
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
  </div>
</template>

<style scoped>
.iframe-container {
  position: relative;
  height: 50vh;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
