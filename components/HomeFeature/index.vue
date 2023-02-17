<script lang="ts" setup>
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps<{
  icon: IconDefinition
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w80.5 space-y-2" v-bind="$attrs">
    <FontAwesomeIcon :icon="icon" class="text-4xl text-theme-blue-100" />
    <h1 class="text-5 font-bold single-line-ellipsis" :title="title">
      {{ title }}
    </h1>
    <div
      class="text-sm text-theme-black-200 ellipsis-line-3 break-all"
      :title="description"
    >
      {{ description }}
    </div>
  </div>
</template>
