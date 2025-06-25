<script setup>
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
import { ref } from 'vue';


async function submitCar() {
  try {
    // NOTE make sure you send down the VALUE stored inside of the ref object
    await carsService.createCar(editableCarData.value)
    // NOTE clears form
    editableCarData.value = {
      make: '',
      model: '',
      imgUrl: '',
      year: new Date().getFullYear(),
      price: 0,
      description: '',
      engineType: '',
      color: '#000000'
    }
    // NOTE hides modal
    Modal.getOrCreateInstance('#carFormModal').hide()
  }
  catch (error) {
    Pop.error(error);
    logger.error('COULD NOT CREATE CAR 🙅‍♂️', error)
  }
}


const editableCarData = ref({
  make: '',
  model: '',
  imgUrl: '',
  year: new Date().getFullYear(),
  price: 0,
  description: '',
  engineType: '',
  color: '#000000'
})

const engineTypes = [
  "unknown",
  "2 stroke",
  "4 cylinder",
  "v6",
  "v8",
  "v10",
  "v12",
  "small",
  "medium",
  "large",
  "chuncko"
]
</script>


<template>
  <form @submit.prevent="submitCar()">
    <div class="form-floating mb-3">
      <input v-model="editableCarData.make" type="text" class="form-control" id="car-make" placeholder="Car Make..."
        required maxlength="500">
      <label for="car-make">Car Make</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableCarData.model" type="text" class="form-control" id="car-model" placeholder="Car Model..."
        required maxlength="500">
      <label for="car-model">Car Model</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableCarData.imgUrl" type="url" class="form-control" id="car-image" placeholder="Car Image..."
        required maxlength="500">
      <label for="car-image">Car Image</label>
    </div>
    <div v-if="editableCarData.imgUrl" class="mb-3">
      <small>Image preview</small>
      <img :src="editableCarData.imgUrl" alt="Your car image" class="img-fluid">
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableCarData.year" type="number" class="form-control" id="car-year" placeholder="Car Year..."
        min="1896" :max="new Date().getFullYear() + 1" required>
      <label for="car-year">Car Year</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableCarData.price" type="number" class="form-control" id="car-price"
        placeholder="Car Price..." required min="0" max="1000000000">
      <label for="car-price">Car Price</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editableCarData.description" class="form-control" placeholder="Leave a description here"
        id="car-description"></textarea>
      <label for="car-description">Car Description</label>
    </div>
    <div class="d-flex gap-4 align-items-center mb-3">
      <div>
        <label for="car-color" class="form-label">Car Color</label>
        <input v-model="editableCarData.color" type="color" class="form-control form-control-color" id="car-color"
          title="Choose your color">
      </div>
      <div class="form-floating flex-grow-1">
        <select v-model="editableCarData.engineType" class="form-select" id="car-engine-type"
          aria-label="Car Engine Type">
          <option selected disabled value="">Select an engine type</option>
          <option v-for="engineType in engineTypes" :key="engineType" :value="engineType">
            {{ engineType }}
          </option>
        </select>
        <label for="car-engine-type">Engine Type</label>
      </div>
    </div>
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-outline-dark" type="button" data-bs-dismiss="modal" aria-label="Close">Close</button>
      <button class="btn btn-success" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>