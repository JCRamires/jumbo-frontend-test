<script setup lang="ts">
import cx from "classnames";
import { JumboStore } from "../../store/types";
import GoogleMapsIFrame from "../GoogleMapsFrame";

interface Props {
  store: JumboStore;
}

const { store } = defineProps<Props>();

const sundayLabelClasses = cx("font-semibold", store.sundayOpen ? "text-green-500" : "text-red-500")
</script>

<template>
  <h2>Store details</h2>
  <div class="grid grid-cols-[max-content_minmax(0,_1fr)] gap-2">
    <div class="font-bold justify-self-end">City:</div>
    <div>
      {{ store.city }}
    </div>
    <div class="font-bold justify-self-end">Address:</div>
    <div>
      <div>{{ store.street }}, {{ store.street2 }}</div>
      <div :v-if="store.street3">{{ store.street3 }}</div>
    </div>
    <div class="font-bold justify-self-end">Postal code:</div>
    <div>{{ store.postalCode }}</div>
  </div>

  <h2>Working hours</h2>
  <div>
    From <span class="font-semibold">{{ store.todayOpen }}</span> to
    <span class="font-semibold text-green">{{ store.todayClose }}</span>
  </div>
  <div>
    <span :class="sundayLabelClasses">{{
      store.sundayOpen ? "Opens" : "Closes"
    }}</span>
    on sundays
  </div>

  <h2>Location</h2>
  <GoogleMapsIFrame :latitude="store.latitude" :longitude="store.longitude" />
</template>
