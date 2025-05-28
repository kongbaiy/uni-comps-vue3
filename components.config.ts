import { useConfig } from './src/components/common/hooks'


export default useConfig({
  style: {
    button: {
      paddingLeft: '20rpx',
      paddingRight: '20rpx',
    }
  },
  size: {
    mini: '40rpx',
    small: '56rpx',
    normal: '72rpx',
    large: '88rpx',
  },
  fontSize: {
    mini: '24rpx',
    small: '28rpx',
    normal: '32rpx',
    large: '36rpx',
  },
})