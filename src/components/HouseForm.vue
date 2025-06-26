<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
import { ref } from 'vue';


async function submitHouse() {
  try {
    await housesService.createHouse(editableHouseData.value);
    editableHouseData.value = {
      bedrooms: 0,
      bathrooms: 0,
      imgUrl: '',
      year: new Date().getFullYear(),
      price: 0,
      description: '',
      levels: 0,
    }
    Modal.getOrCreateInstance('#houseFormModal').hide();
  }
  catch (error){
    Pop.error(error);
    logger.error('🏠📋Could not Create House', error);
  }
}

const editableHouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  imgUrl: '',
  year: new Date().getFullYear(),
  price: 0,
  description: '',
  levels: 0,
})



</script>


<template>
  <form @submit.prevent="submitHouse()">
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="bedrooms" placeholder="Bedroom Number..." required min="0" max="50">
      <label for="bedrooms">Bedroom Number</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="bathrooms" placeholder="Bathroom Number..." required min="0" max="50">
      <label for="bathrooms">Bathroom Number</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.levels" type="number" class="form-control" id="levels" placeholder="levels Number..." required min="0" max="50">
      <label for="levels">Floors Number</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.price" type="number" class="form-control" id="price" placeholder="Price..." required min="0" max="5000000000">
      <label for="price">Price</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.imgUrl" type="url" class="form-control" id="house-image" placeholder="House Image Url..."
        required maxlength="500">
      <label for="house-image">House Image</label>
    </div>
    <div v-if="editableHouseData.imgUrl" class="mb-3">
      <small>Image preview</small>
      <img :src="editableHouseData.imgUrl" alt="Your car image" class="img-fluid">
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.year" type="number" class="form-control" id="house-year" placeholder="House Year..."
        min="0" :max="new Date().getFullYear()" required>
      <label for="house-year">House Year</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editableHouseData.description" class="form-control" placeholder="Leave a description here"
        id="house-description"></textarea>
      <label for="house-description">House Description</label>
    </div>
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-outline-dark" type="button" data-bs-dismiss="modal" aria-label="Close">Close</button>
      <button class="btn btn-success" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped>

</style>