<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMoment } from '../composables/useMoment'
import { withPx } from '../helpers/style'
import DateTime from './DateTime.vue'
import TodayEvent from './TodayEvent.vue'

interface IContentLayerProps {
  angle?: number
}

const RIGHT_COLUMN_HEIGHT = 220

const props = withDefaults(defineProps<IContentLayerProps>(), {
  angle: 0,
})
const leftColumnRef = ref<HTMLDivElement>()
const rightColumnRef = ref<HTMLDivElement>()
const rightColumnWidth = ref(0)
const { moment } = useMoment()

onMounted(() => {
  rightColumnWidth.value = leftColumnRef.value?.clientHeight ?? 0
})
</script>

<template>
  <section
    id="content"
    :style="{
      transform: `rotate(${props.angle}turn)`,
    }"
  >
    <section id="left" ref="leftColumnRef" class="column">
      <DateTime :date="moment" />
      <TodayEvent :date="moment" />
    </section>
    <section
      id="right"
      ref="rightColumnRef"
      class="column"
      :style="{
        width: withPx(rightColumnWidth),
        marginLeft: withPx(RIGHT_COLUMN_HEIGHT - rightColumnWidth),
        transform: `rotate(0.75turn) translateY(${withPx(Math.floor((rightColumnWidth - RIGHT_COLUMN_HEIGHT) / 2))})`,
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
