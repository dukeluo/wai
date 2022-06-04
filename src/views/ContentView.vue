<script setup lang="ts">
import { useContentLayout } from '../composables/useContentLayout'
import { useMoment } from '../composables/useMoment'
import { withPx } from '../helpers/style'
import DateTime from '../components/DateTime.vue'
import TodayEvent from '../components/TodayEvent.vue'
import SeasonFood from '../components/SeasonFood.vue'

const { moment } = useMoment()
const { leftRef, rightWidth } = useContentLayout()
const angle = Math.random().toPrecision(2)
</script>

<template>
  <main id="container">
    <section
      id="content"
      :style="{
        transform: `rotate(${angle}turn)`,
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
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/info-card.scss';

.column {
  display: inline-block;
}

#container {
  height: 100%;
  background-color: #f7f4e3;
  display: flex;
  align-items: center;
  justify-content: center;
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
