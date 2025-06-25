<script setup>
import { AppState } from '@/AppState.js';
import { Car } from '@/models/Car.js';
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

// NOTE if you want access to your props directly in the script tag, you must save the returned value to a variable
const props = defineProps({
  carProp: { type: Car, required: true },
})

const account = computed(() => AppState.account)

async function deleteCar() {
  const confirmed = await Pop.confirm(`Are you sure you want to unlist your ${props.carProp.make} ${props.carProp.model}?`)

  if (!confirmed) {
    return
  }

  try {
    await carsService.deleteCar(props.carProp.id)
  }
  catch (error) {
    Pop.error(error);
    logger.error('COULD NOT DELETE CAR 🙅‍♂️', error)
  }
}
</script>


<template>
  <div class="shadow rounded-top car-border">
    <img :src="carProp.imgUrl"
      :alt="`A picture of ${carProp.creator.name}'s ${carProp.year} ${carProp.make} ${carProp.model}`"
      class="img-fluid car-img">
    <div class="p-3 bg-light">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="fs-3 fw-bold mb-0">{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</p>
        <button @click="deleteCar()" v-if="account?.id == carProp.creatorId" class="btn btn-outline-danger"
          title="Delete car" type="button">
          <span class="mdi mdi-delete"></span>
        </button>
      </div>
      <p class="fs-5">{{ '$' + carProp.price.toLocaleString() }}</p>
      <p>{{ carProp.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <time :datetime="carProp.createdAt.toLocaleDateString()">
          {{ carProp.createdAt.toLocaleDateString() }}
        </time>
        <div>
          <span>{{ carProp.creator.name }}</span>
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

.btn-outline-danger {
  opacity: 0;
  transition: all 300ms ease;
}

.car-border:hover .btn-outline-danger {
  opacity: 1;
}
</style>