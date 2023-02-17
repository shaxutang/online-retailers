<script lang="ts" setup>
import FiveStar from '../FiveStar/index.vue'

export type SimpleCommodityProps = {
  id: string
  img: string
  title: string
  price: string
}

defineProps<SimpleCommodityProps>()
</script>

<template>
  <div class="w63.75 border-1 b-rd-2" v-bind="$attrs">
    <div
      class="flex justify-center items-center h57.5 lh57.5 text-center border-b-1 border-gray-200 overflow-hidden"
    >
      <img
        :src="img"
        alt=""
        class="object-cover object-center max-w90% max-h90%"
      />
    </div>
    <div class="py4 px5">
      <h1 class="text-sm text-theme-black-300 mb1">{{ title }}</h1>
      <five-star :star-count="4" class="mb2" />
      <div class="text-sm font-bold">${{ price }}</div>
    </div>
  </div>
</template>
