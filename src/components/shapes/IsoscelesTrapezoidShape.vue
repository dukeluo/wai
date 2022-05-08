<script setup lang="ts">
import { withPx } from '../../helpers/styles'

interface IIsoscelesTrapezoidShapeProps {
  upperBottom: number
  lowerBottom: number
  height: number
  color: string
}

const props = defineProps<IIsoscelesTrapezoidShapeProps>()

const sideBorderWidth = Math.floor((props.lowerBottom - props.upperBottom) / 2)
</script>

<template>
  <section
    :style="{
      display: 'inline-block',
      width: withPx(upperBottom),
      border: '0 solid transparent',
      borderBottomWidth: withPx(height),
      borderBottomColor: color,
      borderLeftWidth: withPx(sideBorderWidth),
      borderRightWidth: withPx(sideBorderWidth),
    }"
  />
</template>
