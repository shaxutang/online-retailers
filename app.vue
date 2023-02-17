<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import message from '~~/components/Message/_message'

const nuxtApp = useNuxtApp()
nuxtApp.vueApp.config.globalProperties.$message = message
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
