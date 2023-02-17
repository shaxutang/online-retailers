export type MessageProps = {
  id: any
  text: string
  type?: 'success' | 'danger' | 'warn' | 'info'
}

export type Control = {
  add: (message: MessageProps) => void
  remove: (id: any) => void
}

export type Message = {
  message: (text: string, callback?: () => void) => Promise<any>
  success: (text: string, callback?: () => void) => Promise<any>
  danger: (text: string, callback?: () => void) => Promise<any>
  warn: (text: string, callback?: () => void) => Promise<any>
  info: (text: string, callback?: () => void) => Promise<any>
}
