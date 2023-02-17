<script lang="ts" setup>
import match from './match'

withDefaults(
  defineProps<{
    size?: 'small' | 'medium' | 'large'
    rounded?: boolean
    border?: boolean
  }>(),
  {
    size: 'medium'
  }
)
</script>

<template>
  <button
    v-bind="$attrs"
    text-white
    bg-theme-blue-100
    hover:bg-theme-blue-200
    hover:drop-shadow
    transition-all
    :class="{
      'h7.5 px4 text-xs': match.is.small($props),
      'h9.5 px6 text-sm': match.is.medium($props),
      'h12 px7.5 text-5': match.is.large($props),
      'b-rd-1.15': border,
      'text-center !px0 b-rd-full overflow-hidden': rounded,
      'w7.5 lh-7.5': rounded && match.is.small($props),
      'w9.5 lh-9.5': rounded && match.is.medium($props),
      'w12 lh-12': rounded && match.is.large($props)
    }"
  >
    <span v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
    <span v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
  </button>
</template>
