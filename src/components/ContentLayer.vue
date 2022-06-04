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
const { leftRef, rightWidth } = useContentLayout()
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
      class="column"
      :style="{
        width: withPx(rightWidth),
      }"
    >
      <SeasonFood :date="moment" />
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
  position: relative;
  padding-right: 144px;
}

#left {
  width: 420px;
}

#right {
  transform: rotate(0.75turn) translate(-100%, 0);
  transform-origin: left top;
  position: absolute;
  top: 0px;
  left: 444px;
}
</style>
