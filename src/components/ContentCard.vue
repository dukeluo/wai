<script setup lang="ts">
interface IContentCardProps {
  title: string
  items: string[]
  isReversed: boolean
  inW3?: boolean
}

const props = defineProps<IContentCardProps>()
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
</script>

<template>
  <section class="card">
    <h2 :class="{ title: true, reversed: props.isReversed }" :style="props.inW3 ? titleW3Style : titleDefaultStyle">
      {{ props.title }}
    </h2>
    <section :class="{ items: true, reversed: props.isReversed }">
      <p v-for="(item, index) in props.items" :key="index"><span>&bull;</span> {{ item }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.card {
  p {
    font-size: 18px;
    margin: 4px;
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
