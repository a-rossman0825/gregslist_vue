<script setup>
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-3 text-center">Cars <span class="mdi mdi-car"></span></h1>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>