<script setup lang="ts">
import { ref, watch } from 'vue'
import DateTime from '../components/DateTime.vue'
import ModeSelector from '../components/ModeSelector.vue'
import SeasonFood from '../components/SeasonFood.vue'
import TodayEvent from '../components/TodayEvent.vue'
import { useMode } from '../composables/useMode'
import { useMoment } from '../composables/useMoment'

const { moment } = useMoment()
const { mode, config } = useMode()
const transform = ref(`rotate(${config.turn}turn)`)

watch(config, (n) => (transform.value = `rotate(${n.turn}turn)`))
</script>

<template>
  <main id="container">
    <section id="content">
      <section id="w1">
        <DateTime :date="moment" />
      </section>
      <section id="w2">
        <TodayEvent :date="moment" :is-reversed="config.isReversed" />
      </section>
      <section id="w3">
        <SeasonFood :date="moment" :is-reversed="config.isReversed" />
      </section>
    </section>
    <section id="about">
      <a href="https://github.com/dukeluo/wai" target="_blank"><img src="/icons/about.svg" alt="About" /></a>
    </section>
    <section id="setting">
      <ModeSelector v-model="mode" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
#container {
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  margin: auto;
  width: 60vh;
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'w1  w1  w1  w3'
    'w2  w2  w2  w3'
    'w2  w2  w2  w3';
  overflow: hidden;
  transform: v-bind('transform');
}

#w1 {
  grid-area: w1;
}

#w2 {
  grid-area: w2;
}

#w3 {
  grid-area: w3;
  justify-self: center;
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
  text-orientation: sideways;
}

@media (max-width: 820px), (max-height: 820px) {
  #content {
    min-width: 600px;
    min-height: 600px;
    transform: none;
  }
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
