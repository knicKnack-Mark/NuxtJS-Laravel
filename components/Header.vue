<template>
  <div> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div class="container-fluid">
        <Logo />
        <a class="navbar-brand" href="#">
          <img 
            src="assets/logo/logo.png" 
            width="120" height="60" 
            alt="Logo" 
            class="navbar-logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shops</a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle d-flex align-items-center" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/lance.jpeg" alt="admin" width="30" height="30" class="rounded-circle">
              </a>
              <!-- Add "dropdown-menu-end" to prevent overflow -->
              <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end text-small shadow">
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Log out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
