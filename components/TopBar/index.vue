<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTwitter,
  faTelegramPlane,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="bg-theme-blue-100" v-bind="$attrs">
    <div class="container mxauto">
      <div class="px4.5 py2.5">
        <div class="flex justify-between items-center">
          <div class="space-x-2.5">
            <a href="#" class="text-xl text-white">
              <FontAwesomeIcon :icon="faTwitter" />
            </a>
            <a href="#" class="text-xl text-white">
              <FontAwesomeIcon :icon="faTelegramPlane" />
            </a>
            <a href="#" class="text-xl text-white">
              <FontAwesomeIcon :icon="faFacebook" />
            </a>
          </div>
          <div class="flex items-center space-x-5">
            <div class="text-sm text-white">Delivery</div>
            <div class="text-sm text-white">Help</div>
            <div class="text-sm text-white">USD</div>
            <div class="text-sm text-white">Language</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
