<script lang="ts" setup>
import { faHomeAlt, faLock, faTruck } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="flex justify-between" v-bind="$attrs">
    <home-feature
      v-bind="{
        icon: faTruck,
        title: 'Fast Delivery',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum rerum quod nulla, animi blanditiis totam ad possimus dolores eius? Molestias possimus temporibus quibusdam eos ipsum dolor eligendi voluptate pariatur!'
      }"
    />
    <home-feature
      v-bind="{
        icon: faHomeAlt,
        title: 'Creative Strategy',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum rerum quod nulla, animi blanditiis totam ad possimus dolores eius? Molestias possimus temporibus quibusdam eos ipsum dolor eligendi voluptate pariatur!'
      }"
    />
    <home-feature
      v-bind="{
        icon: faLock,
        title: 'High Secured',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum rerum quod nulla, animi blanditiis totam ad possimus dolores eius? Molestias possimus temporibus quibusdam eos ipsum dolor eligendi voluptate pariatur!'
      }"
    />
  </div>
</template>
