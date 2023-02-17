<script lang="ts" setup>
import TopBar from '../TopBar/index.vue'
</script>

<template>
  <header v-bind="$attrs">
    <top-bar />
    <header-content />
    <menus />
  </header>
</template>
