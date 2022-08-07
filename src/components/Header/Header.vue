<template>
  <header
    class="fixed top-0 w-full h-16 bg-primary border-b flex p-2 items-center gap-10"
  >
    <router-link to="/">
      <img src="/jumbo-logo.png" class="object-contain h-12" />
    </router-link>
    <nav class="flex gap-2">
      <router-link class="font-bold" to="/stores">Stores</router-link><br />
      <router-link class="font-bold" to="/cities">Cities</router-link>
    </nav>
  </header>
</template>
