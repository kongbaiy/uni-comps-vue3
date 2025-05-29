import type { IConfig, IFontSize, ISize, IStyle, IStyleAttribute } from './interface/index'

export function useStyle(attribute: IStyleAttribute, componentNames: string[]) {
  const style: AnyObject = {}

  for (let i = 0; i < componentNames.length; i++) {
    const name = componentNames[i]

    style[name] = attribute
  }
  return style
}

class Config {
  static style: IStyle
  static size: ISize
  static fontSize: IFontSize

  constructor() {

  }

  setConfig(config: IConfig) {
    Config.style = config.style!
    Config.size = config.size!
    Config.fontSize = config.fontSize!
  }

  getConfig(key: string): IConfig[keyof IConfig] | undefined {
    return key in Config ? (Config as any)[key] : undefined
  }
}

export function useConfig(_config: IConfig) {
  const config = new Config()

  config.setConfig(_config)
  return config
}
