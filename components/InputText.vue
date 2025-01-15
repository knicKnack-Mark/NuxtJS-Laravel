<template>
  <div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
        >
          <path 
            :fill="iconColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z2" 
          />
        </svg>
      </span>
      <input 
        type="text" 
        class="form-control" 
        :placeholder="placeholder" 
        :aria-label="ariaLabel"
        aria-describedby="basic-addon1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: '#888787',
  },
  ariaLabel: {
    type: String,
    default: 'Email',
  },
});

</script>
