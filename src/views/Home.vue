<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Layouts from '@/views/layouts/Layouts.vue'

const data = ref([])
const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API
const folderId = import.meta.env.VITE_GOOGLE_MAIN_FOLDER_ID

onMounted(async () => {
  const response = await axios.get(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`,
  )

  data.value = response.data.files
})
</script>

<template>
  <Layouts title="Daftar Film">
    <div>
      <div v-if="data.length" class="space-y-3">
        <div v-for="(item, index) in data" :key="index">
          <div v-if="item.mimeType == 'application/vnd.google-apps.folder'">
            <router-link
              :to="{
                name: 'folder.show',
                params: {
                  id: item.id,
                },
              }"
              class="w-full rounded-lg border border-gray-700 py-1 px-3 bg-gray-800 text-white flex items-center gap-3"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
                class="w-10"
              >
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="SVGCleanerId_0"
                    style="fill: #ffc36e"
                    d="M183.295,123.586H55.05c-6.687,0-12.801-3.778-15.791-9.76l-12.776-25.55 l12.776-25.55c2.99-5.982,9.103-9.76,15.791-9.76h128.246c6.687,0,12.801,3.778,15.791,9.76l12.775,25.55l-12.776,25.55 C196.096,119.808,189.983,123.586,183.295,123.586z"
                  ></path>
                  <g>
                    <path
                      id="SVGCleanerId_0_1_"
                      style="fill: #ffc36e"
                      d="M183.295,123.586H55.05c-6.687,0-12.801-3.778-15.791-9.76l-12.776-25.55 l12.776-25.55c2.99-5.982,9.103-9.76,15.791-9.76h128.246c6.687,0,12.801,3.778,15.791,9.76l12.775,25.55l-12.776,25.55 C196.096,119.808,189.983,123.586,183.295,123.586z"
                    ></path>
                  </g>
                  <path
                    style="fill: #eff2fa"
                    d="M485.517,70.621H26.483c-4.875,0-8.828,3.953-8.828,8.828v44.138h476.69V79.448 C494.345,74.573,490.392,70.621,485.517,70.621z"
                  ></path>
                  <rect
                    x="17.655"
                    y="105.931"
                    style="fill: #e1e6f2"
                    width="476.69"
                    height="17.655"
                  ></rect>
                  <path
                    style="fill: #ffd782"
                    d="M494.345,88.276H217.318c-3.343,0-6.4,1.889-7.895,4.879l-10.336,20.671 c-2.99,5.982-9.105,9.76-15.791,9.76H55.05c-6.687,0-12.801-3.778-15.791-9.76L28.922,93.155c-1.495-2.99-4.552-4.879-7.895-4.879 h-3.372C7.904,88.276,0,96.18,0,105.931v335.448c0,9.751,7.904,17.655,17.655,17.655h476.69c9.751,0,17.655-7.904,17.655-17.655 V105.931C512,96.18,504.096,88.276,494.345,88.276z"
                  ></path>
                  <path
                    style="fill: #ffc36e"
                    d="M485.517,441.379H26.483c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h459.034c4.875,0,8.828,3.953,8.828,8.828l0,0C494.345,437.427,490.392,441.379,485.517,441.379z"
                  ></path>
                  <path
                    style="fill: #eff2fa"
                    d="M326.621,220.69h132.414c4.875,0,8.828-3.953,8.828-8.828v-70.621c0-4.875-3.953-8.828-8.828-8.828 H326.621c-4.875,0-8.828,3.953-8.828,8.828v70.621C317.793,216.737,321.746,220.69,326.621,220.69z"
                  ></path>
                  <path
                    style="fill: #c7cfe2"
                    d="M441.379,167.724h-97.103c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h97.103c4.875,0,8.828,3.953,8.828,8.828l0,0C450.207,163.772,446.254,167.724,441.379,167.724z"
                  ></path>
                  <path
                    style="fill: #d7deed"
                    d="M441.379,203.034h-97.103c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h97.103c4.875,0,8.828,3.953,8.828,8.828l0,0C450.207,199.082,446.254,203.034,441.379,203.034z"
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
