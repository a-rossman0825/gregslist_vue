<script setup>
import { Car } from '@/models/Car.js';

defineProps({
  carProp: { type: Car, required: true },
  coolGuy: { type: String }
})
</script>


<template>
  <div class="shadow rounded-top car-border">
    <img :src="carProp.imgUrl"
      :alt="`A picture of ${carProp.creator.name}'s ${carProp.year} ${carProp.make} ${carProp.model}`"
      class="img-fluid car-img">
    <div class="p-3 bg-light">
      <p class="fs-3 fw-bold">{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</p>
      <p class="fs-5">{{ '$' + carProp.price.toLocaleString() }}</p>
      <p>{{ carProp.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <time :datetime="carProp.createdAt.toLocaleDateString()">
          {{ carProp.createdAt.toLocaleDateString() }}
        </time>
        <div>
          <span>{{ carProp.creator.name }}</span>
          <!-- TODO show how to replace broken image link -->
          <img :src="carProp.creator.picture" :alt="carProp.creator.name" class="ms-2 creator-img">
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.car-img {
  width: 100%;
  height: 40dvh;
  object-fit: cover;
}

.creator-img {
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.car-border {
  border-style: double;
  border-width: thick;
  border-color: v-bind('carProp.color');
  overflow-y: hidden;
}
</style>