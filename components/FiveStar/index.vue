<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  starCount: number
}>()
</script>

<template>
  <div v-bind="$attrs" class="space-x-1">
    <FontAwesomeIcon
      text-xs
      text-gray-200
      vertical-initial
      :icon="faStar"
      :class="{
        'text-yellow-500': index <= starCount
      }"
      v-for="index in 5"
      :key="index"
    />
  </div>
</template>
