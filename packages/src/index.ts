import { App } from 'vue'
import { FormGlobalConfigType, globalConfigKey } from './constants/context'
import 'virtual:svg-icons-register'
import './style/index.scss'
import * as components from './components'
export * from './components'

export default {
  install(app: App, options?: FormGlobalConfigType) {
    const config = {
      hideLabel: false,
      labelWidth: '80px',
      zIndex: 2000,
      ...(options ?? {})
    }
    app.provide(globalConfigKey, config)
    app.config.globalProperties.$DForm = config
    Object.values(components).forEach((component) => {
      app.use(component)
    })
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $DForm: FormGlobalConfigType
  }
}
