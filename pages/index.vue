
<template>
  <div>
    <!-- first -->
    <div 
      :style="{ backgroundImage: `url(${couchImage})` }" 
      class="w-100 img-fluid min-height-600 custom-background">
      <div class="text-white pt-5 text-center">
        <!-- <span class="fs-6 fw-lighter"> Pure Comfort </span> -->
        <p class="lh-1 fw-normal custom-font pt-5 "> Enhance <br> Your <br> Home
          <!-- <br>Enhance Your Life -->
        </p>
        <button class="btn btn-dark">Shop Now
          <ShoppingBag class="mb-1"/>
        </button>
      </div>
    </div>
    <!-- second -->
     <div class="px-5 mx-3 text-center pt-5 mt-5">
      <h1 class="lh-1 custom-font-cormorant">
        Designing Comfort,<br>Crafting Elegance
      </h1>
      <div class="custom-font-cormorant fs-5 pt-lg-3 pt-4 custom-padding-2 ">
        <p>
        At Casa De Lujo, we pride ourselves on crafting exceptional furniture pieces that seamlessly blend comfort, functionality, and timeless elegance. Our mission is to transform living spaces into sanctuaries of style and relaxation by offering designs that strike the perfect balance between practicality and aesthetic sophistication.
        </p>
        <p>
          Each piece we create embodies a dedication to quality craftsmanship, meticulous attention to detail, and the use of sustainable, premium materials. We understand that your home is a reflection of your individuality, and our goal is to help you express your unique taste through thoughtfully designed furniture. Whether you’re revamping a single room or embarking on a complete home makeover, our experienced team is here to provide personalized guidance and inspiration every step of the way.
        </p>
        <p>
          From sleek, modern minimalism to the enduring charm of timeless classics, our diverse range of designs caters to every style preference. At Casa De Lujo, we are committed to turning your vision into reality by creating furniture that not only enhances your space but also enriches your lifestyle. Let us help you transform your house into a warm, inviting home that truly feels like your own.
        </p>
      </div>
      <button class="btn btn-dark btn-sm mt-5">Learn More</button>
     </div>
     <!-- third -->
     <div class="py-5 my-2">
      <h1 class="lh-1 custom-font-cormorant text-center">
       Featured Favorites
      </h1>
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-4 col-lg-3 col-sm-6"
            v-for="(item, index) in itemList" 
            :key="index"
          >
            <CardItem v-bind="item" />
          </div>
        </div>
        <hr class="mx-auto border border-dark border-1 opacity-50" style="width: 90%;">
      </div>
     </div>
  </div>
</template>

<script setup lang="ts">
import ShoppingBag from '~/components/icon/ShoppingBag.vue';
import couchImage from '@/assets/img/newbg2.jpg';
import CardItem from '~/components/CardItem.vue';
import chair from '@/assets/pictures/chair.png'
import brownCabinet from '@/assets/pictures/brown-cabinet.png'
import floralClock from '@/assets/pictures/floral-clock.png'
import handCraftedVase from '@/assets/pictures/handcrafted-vase.png'
import modernChairIsolated from '@/assets/pictures/modern-chair-isolated.png'
import modernBed from '@/assets/pictures/modern-bed.png'
import modernKitchen from '@/assets/pictures/modern-kitchen.png'
import modernBedsideTable from '@/assets/pictures/modern-bedside-table.png'


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
    imageSrc: floralClock,
    name:'Chair',
    price: '99.99',
    imageAlt:'chair'
  },
  {
    imageSrc: handCraftedVase,
    name:'Brown Cabinet',
    price: '99.99',
    imageAlt:'Brown Cabinet'
  },
  {
    imageSrc: modernChairIsolated,
    name:'Chair',
    price: '99.99',
    imageAlt:'chair'
  },
  {
    imageSrc: modernBed,
    name:'Brown Cabinet',
    price: '99.99',
    imageAlt:'Brown Cabinet'
  },
  {
    imageSrc: modernKitchen,
    name:'Chair',
    price: '99.99',
    imageAlt:'chair'
  },
  {
    imageSrc: modernBedsideTable,
    name:'Brown Cabinet',
    price: '99.99',
    imageAlt:'Brown Cabinet'
  },
]
</script>

<style src="~/assets/css/index.css"> </style>


