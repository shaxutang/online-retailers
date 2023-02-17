<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser
} from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="flex items-center container mxauto h24" v-bind="$attrs">
    <a href="#" class="flex-3/12">
      <img src="~/assets/logo.png" alt="logo" />
    </a>
    <div class="flex-6/12 flex">
      <v-input placeholder="Search" />
      <!-- <v-input
        placeholder="All Type"
        class="b-rd-tr-1 b-rd-br-1 overflow-hidden"
      >
        <template #suffix>
          <v-button>
            <FontAwesomeIcon :icon="faSearch" />
          </v-button>
        </template>
      </v-input> -->
    </div>
    <div class="flex-3/12 flex">
      <div class="flex space-x-2.5">
        <div
          class="cursor-pointer w12 h12 lh-12 text-xl text-center text-theme-black-300 b-rd-full overflow-hidden border-1"
        >
          <FontAwesomeIcon :icon="faShoppingCart" />
        </div>
        <div
          class="cursor-pointer w12 h12 lh-12 text-xl text-center text-theme-black-300 b-rd-full overflow-hidden border-1"
        >
          <FontAwesomeIcon :icon="faHeart" />
        </div>
        <div
          class="cursor-pointer w12 h12 lh-12 text-xl text-center text-theme-black-300 b-rd-full overflow-hidden border-1"
        >
          <FontAwesomeIcon :icon="faUser" />
        </div>
        <div>
          <div class="text-sm text-theme-black-300">Sign In / Join</div>
          <div>My Account</div>
        </div>
      </div>
    </div>
  </div>
</template>
