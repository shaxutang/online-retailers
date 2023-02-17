import { render, createVNode } from 'vue'
import { Control, Message } from './type'
import lodash from 'lodash'
import MessageContainer from './MessageContainer.vue'

const id = 'message-body'

/**
 * 获取渲染 `message` 组件的根元素
 */
let messageBody = document.querySelector(`#${id}`)

/**
 * 如果根元素不存在则创建，并且添加到body中
 */
if (!messageBody) {
  messageBody = document.createElement('div')
  messageBody.id = id
  document.body.append(messageBody)
}

/**
 * 创建 VNode message-container
 */
const _messageContainer = createVNode(MessageContainer)

/**
 * 将VNode渲染到根元素上去
 */
render(_messageContainer, messageBody as HTMLElement)

/**
 * 必须等VNode渲染完成后才可以获取其组件属性
 * 获取 message-container 组件的控制器
 */
const { control } = _messageContainer.component?.exposed as { control: Control }

export default {
  async message(text: string) {
    const id = lodash.uniqueId()
    control.add({
      id,
      text
    })
    return id
  },
  async success(text: string) {
    const id = lodash.uniqueId()
    control.add({
      id,
      text,
      type: 'success'
    })
    return id
  },
  async danger(text: string) {
    const id = lodash.uniqueId()
    control.add({
      id,
      text,
      type: 'danger'
    })
    return id
  },
  async warn(text: string) {
    const id = lodash.uniqueId()
    control.add({
      id,
      text,
      type: 'warn'
    })
  },
  async info(text: string) {
    const id = lodash.uniqueId()
    control.add({
      id,
      text,
      type: 'info'
    })
    return id
  }
} as Message
