<script setup>
import { Car } from '@/models/Car.js';

defineProps({
  carProp: { type: Car, required: true },
  coolGuy: { type: String }
})
</script>


<template>
  {{ carProp.make }}
</template>


<style lang="scss" scoped></style>