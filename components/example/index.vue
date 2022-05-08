<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{ count: number }>()
</script>

<template>
  <div>{{ count }}</div>
</template>
