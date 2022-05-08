<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '@/utils/bem'

const [name, bem] = createNamespace('menu')
console.log(name)
console.log(bem())
console.log(bem('wrapper'))
console.log(bem(['wrapper']))
console.log(bem(['content', 'qwe']))
console.log(bem('item', ['content', 'qwe']))
console.log(bem('item', { disabled: true }))

const props = {
  count: {
    type: Number,
    required: true
  }
}

export default defineComponent({
  name,
  props
})
</script>

<template>
  <div>{{ count }}</div>
</template>
