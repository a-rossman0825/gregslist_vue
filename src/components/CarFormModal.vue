<script setup>
import CarForm from './CarForm.vue';


</script>


<template>
  <div class="modal fade" id="carFormModal" tabindex="-1" aria-labelledby="carFormModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="carFormModalLabel">List Your Car</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <CarForm />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>