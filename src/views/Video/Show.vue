<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Layouts from '@/views/layouts/Layouts.vue'

const route = useRoute()
const data = ref([])
const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API
const folderId = route.params.folderId
const videoId = route.params.videoId

onMounted(async () => {
  const response = await axios.get(
    `https://www.googleapis.com/drive/v3/files/${videoId}?key=${apiKey}`,
  )

  data.value = response.data
})
</script>
<template>
  <Layouts :title="data.name">
    <div class="flex items-center justify-center">
      <iframe
        :src="`https://drive.google.com/file/d/${data.id}/preview`"
        class="w-full aspect-video rounded-lg"
        allowfullscreen
      >
      </iframe>
    </div>
  </Layouts>
</template>
