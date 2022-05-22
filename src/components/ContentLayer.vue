<script setup lang="ts">
import { useContentLayout } from '../composables/useContentLayout'
import { useMoment } from '../composables/useMoment'
import { withPx } from '../helpers/style'
import DateTime from './DateTime.vue'
import TodayEvent from './TodayEvent.vue'

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
      <section class="card">
        <p class="title">当季吃什么</p>
        <section class="items">
          <ul>
            <li><p>水果：菠萝、甘蔗、砂糖橘、蛋黄果、番石榴、橙子、青枣</p></li>
            <li><p>蔬菜：白菜、菠菜、彩椒、胡萝卜、小白菜、芥菜、平菇、蒜黄、香菇、杏鲍菇、紫菜、豆瓣菜、紫菜苔</p></li>
          </ul>
        </section>
      </section>
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
