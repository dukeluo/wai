<script setup lang="ts">
import { useContentLayout } from '../composables/useContentLayout'
import { useMoment } from '../composables/useMoment'
import { withPx } from '../helpers/style'
import DateTime from './DateTime.vue'
import TodayEvent from './TodayEvent.vue'
import SeasonFood from './SeasonFood.vue'

interface IContentLayerProps {
  angle?: number
}

const props = withDefaults(defineProps<IContentLayerProps>(), {
  angle: 0,
})
const { moment } = useMoment()
const { leftRef, rightRef, rightWidth, offset1, offset2 } = useContentLayout()
</script>

<template>
  <section
    id="content"
    :style="{
      transform: `rotate(${props.angle}turn)`,
    }"
  >
    <section id="left" ref="leftRef" class="column">
      <DateTime :date="moment" />
      <TodayEvent :date="moment" />
    </section>
    <section
      id="right"
      ref="rightRef"
      class="column"
      :style="{
        width: withPx(rightWidth),
        marginLeft: withPx(offset1),
        transform: `rotate(0.75turn) translateY(${withPx(offset2)})`,
      }"
    >
      <SeasonFood />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/info-card.scss';

.column {
  display: inline-block;
}

#content {
  display: flex;
  align-items: center;
}

#left {
  width: 420px;
}
</style>
