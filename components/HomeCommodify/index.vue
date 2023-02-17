<script lang="ts" setup>
import type { SimpleCommodityProps } from '../SimpleCommodity/index.vue'

defineProps<{
  title: string
  simpleCommodities: SimpleCommodityProps[]
}>()
</script>

<template>
  <div v-bind="$attrs">
    <h1 class="text-7 font-bold mb7.5">{{ title }}</h1>
    <div class="flex justify-between">
      <simple-commodity
        v-bind="{
          ...simpleCommodity
        }"
        v-for="simpleCommodity in simpleCommodities"
        :key="simpleCommodity.id"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>
