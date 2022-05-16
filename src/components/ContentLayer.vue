<script setup lang="ts">
interface IContentLayerProps {
  angle?: number
}

defineProps<IContentLayerProps>()
</script>

<template>
  <section
    id="content"
    :style="{
      transform: `rotate(${angle ?? 0}turn)`,
    }"
  >
    <section class="column">
      <section id="datatime" class="part">
        <p id="moment">23:16:24</p>
        <p>
          今天是<span class="hightlight">2021</span>年<span class="hightlight">5</span>月<span class="hightlight"
            >11</span
          >日<span class="hightlight">星期日</span>
        </p>
        <p>距离下一个休息日<span class="hightlight">周六</span>还有<span class="hightlight">1</span>天</p>
      </section>
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
    <section id="right" class="column">
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
  margin: 0;
  font-size: 20px;
}

ul {
  padding-left: 20px;
}

.hightlight {
  font-size: 28px;
  font-weight: bold;
  margin: 8px;
}

.column {
  display: inline-block;
}

.part {
  width: 420px;
  margin-bottom: 60px;
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

#datatime {
  text-align: center;
}

#moment {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 12px;
}

#right {
  transform: rotate(0.75turn) translate(10px, -60px);
}
</style>
