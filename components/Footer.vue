<template>
  <div>
    <div class="text-center text-lg-start bg-body-tertiary text-muted pt-4">
        <div class="container text-center text-md-start">
          <div class="row">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="fs-3 text-black lh-1 custom-font letter-spacing text-muted">
                Your Desires, 
                <br>Our Designs
              </h6>
              <p class="font-open-sans">
                Sign up for more updates about our products, vouchers and news.
              </p>
             <InputText
              placeholder="Email Address" />
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="mb-4 fs-5 fw-bold custom-font" >
                COMPANY
              </h6>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">About Us</a></p>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Contact Information</a></p>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Privacy Policy</a></p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="mb-4 fs-5 fw-bold custom-font" >
                CUSTOMER SERVICE
              </h6>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Contact Us</a></p>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">My Account</a></p>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Store Location</a></p>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Rewards & Vouchers</a></p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="mb-4 fs-5 fw-bold custom-font" >
                EXPLORE MORE
              </h6>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Offers</a></p>
              <p><a href="#!" class="text-decoration-none text-muted position-relative custom-hover">Exclusive Member</a></p>
            </div>
          </div>
        </div>
  <!-- Social media -->
  <div class="container">
    <div class="mb-4 d-flex justify-content-center">
      <a href="#" class="btn mx-2"><IconFacebook /></a>
      <a href="#" class="btn mx-2"><IconInstagram/></a>
      <a href="#" class="btn mx-2"><IconTwitter/></a>
      <a href="#" class="btn mx-2"><IconSkype/></a>
      <a href="#" class="btn mx-2"><IconTiktok/></a>
      <a href="#" class="btn mx-2"><IconYoutube/></a>
    </div>
  </div>
      <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.04);">
        ©-2025 Casa De Lujo
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.custom-font{
  font-family: Cormorant Garamond, serif;
}
.letter-spacing{
  letter-spacing: -2px;
}

.font-open-sans{
  font-family: Open Sans;
  font-size: 13px;
}

.font-13{
  font-size: 13px;
}

.custom-hover::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1.2px;
  border-radius: 4px;
  background-color: #18272F;
  bottom: 0;
  left: 0;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  opacity: 50%;
}

.custom-hover:hover::before {
  transform: scaleX(1.05);
}
</style>