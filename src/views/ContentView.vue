<script setup lang="ts">
import { ref, watch } from 'vue'
import DateTime from '../components/DateTime.vue'
import SettingsMenu from '../components/SettingsMenu.vue'
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
      <SettingsMenu v-model="mode" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: inherit;
  height: inherit;
}

#content {
  transform: v-bind('transform');

  overflow: hidden;
  display: grid;
  grid-template-areas:
    'w1  w1  w1  w3'
    'w2  w2  w2  w3'
    'w2  w2  w2  w3';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  width: 60vh;
  height: 60vh;
  margin: auto;
}

#w1 {
  grid-area: w1;
}

#w2 {
  grid-area: w2;
}

#w3 {
  transform: rotate(-180deg);

  grid-area: w3;
  justify-self: center;

  writing-mode: vertical-rl;
  text-orientation: sideways;
}

@media (max-width: 820px) {
  #content {
    transform: none;
    min-width: 600px;
    min-height: 600px;
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
  right: 16px;
  bottom: 32px;
}
</style>
