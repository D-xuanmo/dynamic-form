/** 水平对齐方式 */
export type HorizontalAlignEnum = 'left' | 'center' | 'right'

export type SizeEnum = 'small' | 'medium' | 'large'

/** 格式化触发时机 */
export type FieldFormatterTrigger = 'onChange' | 'onBlur'

/** 弹框位置类型 */
export type PlacementType = 'top' | 'right' | 'bottom' | 'left' | 'center'

/** 数据基础类型，单选、多选、选择器等组件 */
export type DataType = {
  label: string
  value: string | number
  disabled?: boolean
} & Record<string, any>

/** 排除 props value / modelValue */
export type OmitValueProperties<T extends Record<string, unknown>> = Omit<T, 'value' | 'modelValue'>
