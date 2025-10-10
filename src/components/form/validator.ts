export interface IFormRule {
  message?: string
  required?: boolean
  pattern?: RegExp
  minLength?: number
  maxLength?: number
  validator: (rule: IFormRule, value?: any, callback?: <T>(data: T) => void) => void
}

export interface IFormValidatorOptions {
  form: any
  rules: { [key: string]: IFormRule[] | any }
  prompt?: boolean
}

/**
 * 表单验证器
 * @param {object} options
 * @param {object} options.form
 * @param {IFormRule} options.rules
 */
export function formValidator(options: IFormValidatorOptions) {
  const { form, rules, prompt } = options

  return new Promise((resolve, reject) => {
    let key: string
    const errorInfo: any[] = []

    for (key in rules) {
      const rule = rules[key]
      const formValue = form[key as unknown as number]
      let isBreak = true

      for (let r = 0; r < rule.length; r++) {
        const currentRule: IFormRule = rule[r]

        if (typeof currentRule.validator === 'function') {
          currentRule.validator(currentRule, formValue, (error) => {
            if (error) {
              let message: string

              if (error instanceof Error) message = error.message.replace(error.name, '')
              else message = error as string

              if (prompt) {
                uni.showToast({
                  title: message,
                  icon: 'none',
                })
              }

              isBreak = false
            }
          })
        }

        if (
          !currentRule.validator
          && (
            (currentRule.required && (formValue === undefined || formValue === null || formValue === ''))
            || (currentRule.pattern && !currentRule.pattern?.test(formValue))
            || (currentRule.minLength && formValue?.length < currentRule.minLength)
            || (currentRule.maxLength && formValue?.length > currentRule.maxLength)
          )
        ) {
          errorInfo.push({
            formValue,
            key,
            currentRule,
            rules,
          })
          reject(errorInfo)

          if (prompt) {
            uni.showToast({
              title: currentRule.message,
              icon: 'none',
            })
          }

          return isBreak = false
        }
      }

      if (!isBreak) return
    }

    resolve(form)
  })
}
