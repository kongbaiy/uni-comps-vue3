import type { IConfig } from './interface'
import { useStyle } from './hooks'

const { default: customConfig } = import.meta.glob('/components.config.ts', { eager: true })['/components.config.ts'] as unknown as AnyObject

const defaultConfig: IConfig = {
  style: {
    ...useStyle({
      paddingLeft: '20rpx',
      paddingRight: '20rpx',
    }, ['button']),
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
}

export const style = customConfig.getConfig('style') || defaultConfig.style
export const size = customConfig.getConfig('size') || defaultConfig.size
export const fontSize = customConfig.getConfig('fontSize') || defaultConfig.fontSize

