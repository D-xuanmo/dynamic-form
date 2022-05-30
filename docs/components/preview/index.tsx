import { defineComponent, PropType, ref } from 'vue'
import { createNamespace } from '@/utils/bem'
import './style.scss'

const [name, bem] = createNamespace('doc-preview')

const props = {
  type: {
    type: String as PropType<'PC' | 'H5'>,
    default: 'H5'
  },
  source: { type: String, default: '' }
}

const DocPreview = defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const showCode = ref(false)
    const toggleCodeVisible = () => {
      showCode.value = !showCode.value
    }
    return () => {
      const { type, source } = props
      const isMobile = type?.toUpperCase() === 'H5'

      const renderCode = isMobile ? null : <div v-html={decodeURIComponent(source)} />

      const renderContent = isMobile ? null : (
        <>
          <div className={bem('toolbar', { active: showCode.value })}>
            <span onClick={toggleCodeVisible}>{!showCode.value ? '显示' : '隐藏'}代码</span>
          </div>
          <div className={bem('code', { active: showCode.value })}>{renderCode}</div>
        </>
      )

      return (
        <div class={bem('wrapper', { h5: isMobile })}>
          <div class={bem('runtime')}>{slots.default?.()}</div>
          {renderContent}
        </div>
      )
    }
  }
})

export default DocPreview
