<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

defineProps<{
  title: string
  links: {
    icon?: IconDefinition
    path: string
    title: string
  }[]
}>()
</script>

<template>
  <div v-bind="$attrs">
    <div class="font-bold mb2.5">{{ title }}</div>
    <div class="space-y-2">
      <a :href="link.path" v-for="link in links" :key="link.path">
        <div>
          <FontAwesomeIcon
            :icon="link.icon"
            v-if="link.icon"
            class="mr2 text-theme-black-300"
          />
          <div class="inline-block text-sm text-theme-black-200">
            {{ link.title }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
