<script setup>

import { House } from '@/models/House.js';



defineProps({
  houseProp: { type: House, required: true }
});

</script>


<template>
  <div class="shadow rounded-top house-border position-relative">
    <img :src="houseProp.imgUrl" :alt="`A picture of ${houseProp.creator.name}'s ${houseProp.levels} story house for sale'`" class="img-fluid house-img"/>
    <span class="price">{{'$' + houseProp.price.toLocaleString() }}</span>
    <div class="p-3 bg-light">
      <div class="justify-content-between mb-2">
        <div class="d-flex justify-content-between align-items-end">
          <p class="fs-5 fw-bold mb-0">
            {{houseProp.bedrooms}}bd/{{ houseProp.bathrooms}}ba {{ houseProp.levels }} Story House
          </p>
          <i class="mdi mdi-delete-outline fs-4 text-danger"></i>
        </div>
        <p>{{ houseProp.year }} <i class="mdi mdi-clock-outline"></i></p>
        <p>{{ houseProp.description }}</p>
        <div class="d-flex justify-content-between">
          <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" class="creator-img">
          <time :datetime="houseProp.createdAt.toLocaleDateString()"> listed on:
            {{ houseProp.createdAt.toLocaleDateString() }}
          </time>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.house-img {
  width: 100%;
  height: 25dvh;
  object-fit: cover;
}

.price {
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--bs-success);
  font-size: 2ch;
  font-weight: bolder;
  border-bottom-left-radius: 10%;
}

.creator-img {
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.house-border {
  border-style: double;
  border-width: thick;
  border-color: black;
  overflow-y: hidden;
}

.btn-outline-danger {
  opacity: 0;
  transition: all 300ms ease;
}

.house-border:hover .btn-outline-danger {
  opacity: 1;
}
</style>