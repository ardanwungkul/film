<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
  title: String,
})
</script>
<template>
  <div class="bg-gray-900 min-h-screen w-full !p-10">
    <div class="flex items-center gap-3 py-3">
      <RouterLink v-if="route.name !== 'home'" :to="{ name: 'home' }">
        <svg viewBox="0 0 16 16" fill="none" class="w-5" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_iconCarrier">
            <path
              class="fill-white"
              d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
            ></path>
          </g>
        </svg>
      </RouterLink>
      <p class="text-xl text-white font-medium">{{ title }}</p>
    </div>
    <slot />
  </div>
</template>
