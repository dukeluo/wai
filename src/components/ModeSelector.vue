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

const Mode_Data: IOption[] = [
  { label: '柔和模式', value: Mode.Soft },
  { label: '连续模式', value: Mode.Continuous },
  { label: '全面模式', value: Mode.Full },
]

const props = defineProps<IModeSelector>()
const emit = defineEmits(['update:modelValue'])
const slider = ref<HTMLDivElement>()
const selectedIndex = computed(() => Mode_Data.findIndex((mode) => mode.value === props.modelValue))

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
        v-for="(option, index) in Mode_Data"
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
  border: 1px solid $color-1;
  border-radius: 2px;
  background: $color-2;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;

    li {
      width: $element-width;
      height: $element-height;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      cursor: pointer;
      color: $color-1;
      transition: color $transition-duration * 2;
    }

    .selected {
      background-color: transparent;
      color: $color-2;
      z-index: 1;
    }
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: $element-width;
    height: $element-height;
    transition: transform $transition-duration;
    background-color: $color-1;
  }
}
</style>
