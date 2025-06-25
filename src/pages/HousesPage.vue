<script setup>
import { AppState } from '@/AppState.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  getHouses();
})

computed(() => AppState.houses);


async function getHouses() {
  try {
    await housesService.getAllHouses();
  }
  catch (error){
    Pop.error(error);
    logger.error('🏠🗒️ Could not get Houses!', error);
  }
}

</script>


<template>
  <h1>Houses Page</h1>
</template>


<style lang="scss" scoped>

</style>