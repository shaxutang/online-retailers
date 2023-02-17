<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheck,
  faTimes,
  faExclamation,
  faComment
} from '@fortawesome/free-solid-svg-icons'

defineProps<{
  id: any
  text: string
  type?: 'success' | 'danger' | 'warn' | 'info'
}>()

const icon = {
  success: faCheck,
  danger: faTimes,
  warn: faExclamation,
  info: faComment
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="z999 inline-block px4 py2 text-sm text-slate-600 bg-white drop-shadow b-rd-2"
  >
    <FontAwesomeIcon
      :icon="icon[type]"
      class="mr1"
      :class="{
        'text-blue': type === 'success',
        'text-red': type === 'danger',
        'text-yellow': type === 'warn',
        'text-gray': type === 'info'
      }"
      v-if="type"
    />

    {{ text }}
  </div>
</template>
