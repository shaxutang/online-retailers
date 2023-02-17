<script lang="ts" setup>
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="h13.5 lh-13.5 border-t-1 border-b-1" v-bind="$attrs">
    <div class="flex container mxauto">
      <div class="cursor-pointer mr3">
        <FontAwesomeIcon :icon="faBars" />
      </div>
      <div class="flex items-center space-x-10">
        <div class="cursor-pointer text-sm font-bold">All Categories</div>
        <div class="cursor-pointer text-sm font-bold">Fashion</div>
        <div class="cursor-pointer text-sm font-bold">Supermarket</div>
        <div class="cursor-pointer text-sm font-bold">Electronics</div>
        <div class="cursor-pointer text-sm font-bold">Fitness and sport</div>
        <div class="cursor-pointer text-sm font-bold">Clothing</div>
        <div class="cursor-pointer text-sm font-bold">Furnitures</div>
      </div>
    </div>
  </div>
</template>
