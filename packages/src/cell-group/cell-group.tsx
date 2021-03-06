import { defineComponent, provide, PropType, inject } from 'vue'
import { createNamespace } from '../utils/bem'
import { cellGroupInjectKey } from '../context/cell-group'
import { globalConfigKey } from '../context/global'
import { LABEL_WIDTH } from '../constants'

const [name, bem] = createNamespace('cell-group')

const props = {
  title: String as PropType<string | undefined>,
  round: Boolean,
  cellTitleWidth: String
}

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const globalConfig = inject(globalConfigKey)
    provide(cellGroupInjectKey, {
      cellTitleWidth: props.cellTitleWidth || globalConfig?.labelWidth || LABEL_WIDTH
    })
    return () => {
      const { title, round } = props
      return (
        <div className={bem()}>
          <p className={bem('title')}>{title}</p>
          <div className={bem('content', { round })}>{slots.default?.()}</div>
        </div>
      )
    }
  }
})
