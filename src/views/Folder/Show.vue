<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Layouts from '@/views/layouts/Layouts.vue'

const route = useRoute()
const data = ref([])
const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API
const folderId = route.params.id

onMounted(async () => {
  const response = await axios.get(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`,
  )

  data.value = response.data.files.sort((a, b) => a.name.localeCompare(b.name))
})
</script>
<template>
  <Layouts title="Daftar Film">
    <div class="">
      <div v-if="data.length" class="space-y-3">
        <div v-for="(item, index) in data" :key="index">
          <div v-if="item.mimeType == 'video/mp4'">
            <router-link
              :to="{
                name: 'video.show',
                params: {
                  folderId: folderId,
                  videoId: item.id,
                },
              }"
              class="w-full rounded-lg border border-gray-700 py-1 px-3 bg-gray-800 text-white flex items-center gap-3"
            >
              <svg
                viewBox="0 0 1024 1024"
                class="icon w-10"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M960 1002.666667H64a42.666667 42.666667 0 0 1-42.666667-42.666667V64a42.666667 42.666667 0 0 1 42.666667-42.666667h896a42.666667 42.666667 0 0 1 42.666667 42.666667v896a42.666667 42.666667 0 0 1-42.666667 42.666667z"
                    fill="#8680D8"
                  ></path>
                  <path
                    d="M64 64h896v682.666667H64zM896 896H597.333333a21.333333 21.333333 0 1 1 0-42.666667h298.666667a21.333333 21.333333 0 1 1 0 42.666667z"
                    fill="#5757B2"
                  ></path>
                  <path
                    d="M661.333333 896H128a21.333333 21.333333 0 1 1 0-42.666667h533.333333a21.333333 21.333333 0 1 1 0 42.666667z"
                    fill="#EF8EC3"
                  ></path>
                  <path
                    d="M640 960c-47.04 0-85.333333-38.293333-85.333333-85.333333s38.293333-85.333333 85.333333-85.333334 85.333333 38.293333 85.333333 85.333334-38.293333 85.333333-85.333333 85.333333zM426.666667 554.666667a21.269333 21.269333 0 0 1-21.333334-21.333334V277.333333a21.333333 21.333333 0 0 1 33.173334-17.749333l192 128a21.333333 21.333333 0 0 1 0 35.498667l-192 128A21.333333 21.333333 0 0 1 426.666667 554.666667z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
              <p>
                {{ item.name }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-white text-center">Loading.....</p>
      </div>
      <!-- <div v-if="data.length">
      <div v-for="file in data" :key="file.id" class="mb-4">
        <p class="font-semibold">{{ file.name }}</p>
        <iframe
          :src="`https://drive.google.com/file/d/${file.id}/preview`"
          width="100%"
          height="360"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div v-else>
      <p>Loading atau tidak ada file...</p>
    </div> -->
    </div>
  </Layouts>
</template>
