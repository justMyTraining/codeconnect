
<template>
  <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visible" header="Sidebar" class="w-full md:w-20rem lg:w-30rem" :showCloseIcon="false">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Sidebar>
      <Button icon="pi pi-arrow-right" @click="visible = true" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "primevue/button"
import Sidebar from 'primevue/sidebar';

const visible = ref(true);
</script>