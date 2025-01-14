<template>
  <div class="container">
    <div class="row g-4">
      <div class="col-md-3 col-sm-6"
        v-for="(item, index) in itemList" 
        :key="index"
      >
        <CardItem v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chair from '@/assets/pictures/chair.png'
import brownCabinet from '@/assets/pictures/brown-cabinet.png'

definePageMeta({
  layout: 'custom-layout'
})

const itemList = [
  {
    imageSrc: chair,
    name:'Chair',
    price: '99.99',
    imageAlt:'chair'
  },
  {
    imageSrc: brownCabinet,
    name:'Brown Cabinet',
    price: '99.99',
    imageAlt:'Brown Cabinet'
  },
  {
    imageSrc: chair,
    name:'Chair',
    price: '99.99',
    imageAlt:'chair'
  },
  {
    imageSrc: brownCabinet,
    name:'Brown Cabinet',
    price: '99.99',
    imageAlt:'Brown Cabinet'
  },
]
</script>
