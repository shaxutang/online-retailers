<script lang="ts" setup>
import Message from './index.vue'
import { MessageProps, Control } from './type'

const messages = ref<MessageProps[]>([])

const control: Control = {
  add: (message: MessageProps) => {
    messages.value = [...messages.value, message]

    setTimeout(() => {
      control.remove(message.id)
    }, 3000)
  },
  remove: (id: any) => {
    const _messages = messages.value
    const index = _messages.findIndex((message) => message.id === id)
    _messages.splice(index, 1)
    messages.value = [..._messages]
  }
}

defineExpose({
  control
})
</script>

<template>
  <div class="z999 fixed top-10 left-50% translate-x--50% pointer-events-none">
    <TransitionGroup name="list" tag="div">
      <div class="not-last:mb4" v-for="message in messages" :key="message.id">
        <Message
          v-bind="{
            ...message
          }"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="less" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
