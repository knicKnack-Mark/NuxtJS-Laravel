<template>
  <div>
    <div class="container">
      <div class="card border border-0 fixed-height">
        <!-- Card image -->
        <div class="view overlay bg-body-secondary bg-opacity-75 p-4 rounded-4 hover-effect">
          <img
            class="card-img-top"
            :src="props.imageSrc"
            :alt="props.imageAlt"
          />
        </div>
        <div class="card-body text-center lh-1">
          <h4 class="card-title fs-4 custom-font-cormorant">
            {{ props.name }}
          </h4>
          <p class="card-text custom-font-lato fw-light">
            ${{ props.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.card {
  margin: 5% 0%;
  cursor: pointer; 
}

.custom-font-cormorant {
  font-family: Cormorant Garamond, serif;
}

.custom-font-lato {
  font-family: Lato;
  font-size: 14px;
}

/* Hover Effect */
.hover-effect {
  position: relative;
  overflow: hidden;
}

.hover-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(241, 250, 255, 0.993);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.hover-effect:hover::after {
  opacity: 0.4;
}

</style>
