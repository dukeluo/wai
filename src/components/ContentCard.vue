<script setup lang="ts">
import { Ref, ref } from 'vue'

interface IContentCardProps {
  title: string
  items: string[]
  isReversed: boolean
  inW3?: boolean
}

interface IContentCardApis {
  containerRef: Ref<HTMLElement | undefined>
  titleRef: Ref<HTMLElement | undefined>
  contentRef: Ref<HTMLElement | undefined>
}

const props = defineProps<IContentCardProps>()
const containerRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const titleDefaultStyle = {
  marginBottom: '8px',
  paddingBottom: '8px',
  borderBottom: '8px solid black',
}
const titleW3Style = {
  marginLeft: '8px',
  paddingLeft: '8px',
  borderLeft: '8px solid black',
}

defineExpose<IContentCardApis>({ containerRef, titleRef, contentRef })
</script>

<template>
  <section ref="containerRef" class="card">
    <h2
      ref="titleRef"
      :class="{ title: true, reversed: props.isReversed }"
      :style="props.inW3 ? titleW3Style : titleDefaultStyle"
    >
      {{ props.title }}
    </h2>
    <section ref="contentRef" :class="{ items: true, reversed: props.isReversed }">
      <p v-for="(item, index) in props.items" :key="index"><span>&bull; </span>{{ item }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
section.card {
  width: 100%;
  height: 100%;
}

.card {
  p {
    font-size: 18px;
    margin: 0 0 4px 0;
    line-height: 1.4;
  }

  .title {
    font-size: 24px;
    line-height: 1.2;
    color: #e81c27;

    &.reversed {
      text-align: right;
    }
  }

  .items {
    span {
      font-weight: bold;
    }
    &.reversed {
      transform: rotate(0.5turn);
    }
  }
}
</style>
