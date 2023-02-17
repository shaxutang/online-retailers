export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $message: typeof import('../components/Message/type')['Message']
  }
}
