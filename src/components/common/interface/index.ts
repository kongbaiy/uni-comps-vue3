type TComponents = 'button' 
| 'checkbox' 
| 'checkboxGroup' 
| 'dialog'
| 'form' 
| 'formItem' 
| 'icon'
| 'list'
| 'navbar'
| 'popover'
| 'popup'
| 'radio'
| 'radioGroup'
| 'search'
| 'slideAction'
| 'slideDelete'
| 'tab'
| 'text'
| 'textarea' 
| 'verifyCode' 


export interface IStyleAttribute {
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  width?: string
  height?: string
}

type StyleMap = {
  [key in TComponents]?: IStyleAttribute
}

export interface IStyle extends StyleMap {}

export interface ISize {
  mini: string
  small: string
  normal: string
  large: string
}

export interface IFontSize extends ISize {}

export interface IConfig {
  style?: IStyle
  size?: ISize
  fontSize?: IFontSize
}
