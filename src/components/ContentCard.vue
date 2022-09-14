<script setup lang="ts">
interface IContentCardProps {
  title: string
  items: string[]
  isReversed: boolean
}

const props = defineProps<IContentCardProps>()
</script>

<template>
  <section class="card">
    <h2 :class="{ title: true, reversed: props.isReversed }">{{ props.title }}</h2>
    <section :class="{ items: true, reversed: props.isReversed }">
      <p v-for="(item, index) in props.items" :key="index" class="item">
        {{ item }}
      </p>
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
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 1.2;
    color: #e81c27;
    padding-bottom: 8px;
    border-bottom: 8px solid black;

    &.reversed {
      text-align: right;
    }
  }

  .items {
    .item {
      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        border-radius: 3px;
        height: 6px;
        width: 6px;
        margin-right: 8px;
        background-color: black;
      }
    }

    &.reversed {
      transform: rotate(0.5turn);
    }
  }
}
</style>
