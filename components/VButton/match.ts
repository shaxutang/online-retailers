type VButtonProps = {
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
}

const is = {
  small(props: VButtonProps) {
    return props.size === 'small'
  },
  medium(props: VButtonProps) {
    return props.size === 'medium'
  },
  large(props: VButtonProps) {
    return props.size === 'large'
  }
}

export default {
  is
}
