<script setup lang="ts">
import { useContentLayout } from '../composables/useContentLayout'
import { useMoment } from '../composables/useMoment'
import DateTime from '../components/DateTime.vue'
import TodayEvent from '../components/TodayEvent.vue'
import SeasonFood from '../components/SeasonFood.vue'
import ModeSelector from '../components/ModeSelector.vue'
import { useMode } from '../composables/useMode'

const { moment } = useMoment()
const { leftRef, rightWidth } = useContentLayout()

const { mode, config } = useMode()
</script>

<template>
  <main id="container">
    <section
      id="content"
      :style="{
        transform: `rotate(${config.turn}turn)`,
      }"
    >
      <section id="left" ref="leftRef" class="column">
        <DateTime :date="moment" />
        <TodayEvent :date="moment" :is-reversed="config.isReversed" />
      </section>
      <section
        id="right"
        class="column"
        :style="{
          width: `${rightWidth}px`,
        }"
      >
        <SeasonFood :date="moment" :is-reversed="config.isReversed" />
      </section>
    </section>
    <section id="about">
      <a href="https://github.com/DukeLuo/wai" target="_blank"><img src="/icons/about.svg" alt="About" /></a>
    </section>
    <section id="setting">
      <ModeSelector v-model="mode" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.column {
  display: inline-block;
}

#container {
  width: 100%;
  height: 100%;
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

#about {
  position: absolute;
  top: 16px;
  right: 16px;

  img {
    width: 24px;
    height: 24px;
  }
}

#setting {
  position: absolute;
  bottom: 32px;
  right: 16px;
}
</style>
