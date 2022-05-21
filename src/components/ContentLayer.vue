<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { withPx } from '../helpers/styles'
import DateTime from './DateTime.vue'

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
      <DateTime />
      <section class="part">
        <p class="title">今天过什么节</p>
        <section class="items">
          <ul>
            <li><p>世界上大多数国家的新年，中文称为“元旦”，这一天是公历新一年的开始</p></li>
            <li><p>瑞士：妇女掌权日</p></li>
            <li><p>古巴：全国解放日</p></li>
            <li><p>苏丹：国庆日</p></li>
            <li><p>中国台湾：开国纪念日（始于1912年）</p></li>
            <li><p>海地：独立日（始于1804年）</p></li>
            <li><p>巴勒斯坦：武装斗争日（始于1965年）</p></li>
          </ul>
        </section>
      </section>
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
      <section class="part">
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

<style scoped>
p {
  font-size: 20px;
}

ul {
  padding-left: 20px;
}

.column {
  display: inline-block;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: right;
  color: #e81c27;
  padding-bottom: 12px;
  border-bottom: 12px solid black;
}

.items {
  transform: rotate(0.5turn);
}

#content {
  display: flex;
  align-items: center;
}

#left {
  width: 420px;
}
</style>
