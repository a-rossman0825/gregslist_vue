<script setup>
import { AppState } from '@/AppState.js';
import CarFormModal from '@/components/CarFormModal.vue';
import CarListing from '@/components/CarListing.vue';
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const cars = computed(() => AppState.cars)

onMounted(() => {
  getCars()
})

async function getCars() {
  try {
    await carsService.getCars()
  } catch (error) {
    Pop.error(error)
    logger.error('COULD NOT GET CARS', error)
  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center align-items-center">
          <h1 class="display-3">Cars <span class="mdi mdi-car"></span></h1>
          <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#carFormModal">
            List Car <span class="mdi mdi-car-key"></span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-3">
        <CarListing :carProp="car" :coolGuy="'mick'" />
      </div>
    </div>
  </section>
  <CarFormModal />
</template>


<style lang="scss" scoped></style>