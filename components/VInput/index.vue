<script lang="ts" setup>
import { InputState } from './type'

const state = ref<InputState>('default')

const inputRef = ref()

onMounted(() => {
  inputRef.value.addEventListener('focus', () => {
    state.value = 'primary'
  })

  inputRef.value.addEventListener('blur', () => {
    state.value = 'default'
  })
})

defineExpose({
  target: inputRef.value
})
</script>

<template>
  <div
    w62.5
    h9.5
    px2.5
    text-sm
    text-theme-black-200
    border-1
    transition-all
    :class="{
      'flex items-center': $slots.prefix || $slots.suffix,
      '!pl0': $slots.prefix,
      '!pr0': $slots.suffix,
      '!border-theme-blue-200': state === 'primary',
      '!border-theme-green-200': state === 'success'
    }"
  >
    <span class="mr2.5" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <input
      ref="inputRef"
      type="text"
      v-bind="$attrs"
      class="wfull hfull outline-none"
    />
    <span class="ml2.5" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
  </div>
</template>
