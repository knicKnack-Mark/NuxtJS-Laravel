<template>
  <div>
    <div class="text-center text-lg-start bg-body-tertiary text-muted">
  <div class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="fs-3 text-black lh-1 custom-font">
            Your Desires, 
            <br>Our Designs
          </h6>
          <p>
            Sign up for more updates about our products, vouchers and news.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p><a href="#!" class="text-reset">Angular</a></p>
          <p><a href="#!" class="text-reset">React</a></p>
          <p><a href="#!" class="text-reset">Vue</a></p>
          <p><a href="#!" class="text-reset">Laravel</a></p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p><a href="#!" class="text-reset">Pricing</a></p>
          <p><a href="#!" class="text-reset">Settings</a></p>
          <p><a href="#!" class="text-reset">Orders</a></p>
          <p><a href="#!" class="text-reset">Help</a></p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p> <Facebook /> Mark Neil Bertiz</p>
          <p><i class="fas fa-envelope me-3"></i> info@example.com</p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</div>

  </div>
</template>

<script setup lang="ts">
import Facebook from '~/components/icon/Facebook.vue';
</script>

<style scoped>
.custom-font{
  font-family: Cormorant Garamond, serif;
  letter-spacing: -2px;
}
</style>