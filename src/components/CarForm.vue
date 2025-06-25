<script setup>


const engineTypes = [
  "unknown",
  "2",
  "stroke",
  "4",
  "cylinder",
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
  <form>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="car-make" placeholder="Car Make..." required maxlength="500">
      <label for="car-make">Car Make</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="car-model" placeholder="Car Model..." required maxlength="500">
      <label for="car-model">Car Model</label>
    </div>
    <div class="form-floating mb-3">
      <input type="url" class="form-control" id="car-image" placeholder="Car Image..." required maxlength="500">
      <label for="car-image">Car Image</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="car-year" placeholder="Car Year..." required
        :max="new Date().getFullYear() + 1">
      <label for="car-year">Car Year</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="car-price" placeholder="Car Price..." required max="1000000000">
      <label for="car-price">Car Price</label>
    </div>
    <div class="form-floating mb-3">
      <textarea class="form-control" placeholder="Leave a description here" id="car-description"></textarea>
      <label for="car-description">Car Description</label>
    </div>
    <div class="d-flex gap-4 align-items-center mb-3">
      <div>
        <label for="car-color" class="form-label">Car Color</label>
        <input type="color" class="form-control form-control-color" id="car-color" value="#563d7c"
          title="Choose your color">
      </div>
      <div class="form-floating flex-grow-1">
        <select class="form-select" id="car-engine-type" aria-label="Car Engine Type">
          <option selected disabled value="">Select an engine type</option>
          <option v-for="engineType in engineTypes" :key="engineType" value="1">
            {{ engineType }}
          </option>
        </select>
        <label for="car-engine-type">Engine Type</label>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>