type LILIFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'datepicker'
  | 'time'
  | 'textarea'
  | 'upload'
  | 'editor'
  | 'custom'

export interface LILIFormItem {
  field: string
  type: LILIFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 用于select、radio、checkbox
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
  initialValue?: any
}

export interface LILIFormConfig {
  pageName: string
  formItems: LILIFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
