<script setup lang="ts">
import { computed, ref } from 'vue'
import { Mode } from '../types'

interface IOption {
  label: string
  value: Mode
}

interface IModeSelector {
  modelValue: Mode
}

const MODE_OPTIONS: IOption[] = [
  { label: '柔和模式', value: Mode.Soft },
  { label: '连续模式', value: Mode.Continuous },
  { label: '全面模式', value: Mode.Full },
]

const props = defineProps<IModeSelector>()
const emit = defineEmits(['update:modelValue'])
const slider = ref<HTMLDivElement>()
const selectedIndex = computed(() => MODE_OPTIONS.findIndex((mode) => mode.value === props.modelValue))

const onSelect = (option: IOption, index: number) => {
  if (slider.value) {
    slider.value.style.transform = `translateX(${100 * index}%)`
  }
  emit('update:modelValue', option.value)
}
</script>

<template>
  <section id="mode-selector">
    <ul>
      <li
        v-for="(option, index) in MODE_OPTIONS"
        :key="option.value"
        :class="{ selected: index === selectedIndex }"
        @click="onSelect(option, index)"
      >
        {{ option.label }}
      </li>
    </ul>
    <div ref="slider" class="slider" :style="{ transform: `translateX(${100 * selectedIndex}%)` }"></div>
  </section>
</template>

<style lang="scss" scoped>
$color-1: #8f8148;
$color-2: #fefdf5;
$element-width: 120px;
$element-height: 36px;
$transition-duration: 0.8s;

#mode-selector {
  position: relative;
  background: $color-2;
  border: 1px solid $color-1;
  border-radius: 2px;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      width: $element-width;
      height: $element-height;

      color: $color-1;
      list-style: none;

      transition: color $transition-duration * 2;
    }

    .selected {
      z-index: 1;
      color: $color-2;
      background-color: transparent;
    }
  }

  .slider {
    pointer-events: none;

    position: absolute;
    top: 0;
    left: 0;

    width: $element-width;
    height: $element-height;

    background-color: $color-1;

    transition: transform $transition-duration;
  }
}
</style>
