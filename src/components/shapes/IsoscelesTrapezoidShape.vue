<script setup lang="ts">
import { withPx } from '../../helpers/styles'

interface IIsoscelesTrapezoidShapeProps {
  upperBottom: number
  lowerBottom: number
  height: number
  color: string
}

const props = defineProps<IIsoscelesTrapezoidShapeProps>()

const waist = Math.ceil(Math.hypot((props.lowerBottom - props.upperBottom) / 2, props.height))
</script>

<template>
  <section
    :style="{
      display: 'inline-block',
      width: withPx(lowerBottom),
      height: 0,
      background: 'transparent',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderBottomWidth: withPx(upperBottom),
      borderBottomColor: color,
      borderLeftWidth: withPx(waist),
      borderRightWidth: withPx(waist),
    }"
  ></section>
</template>
