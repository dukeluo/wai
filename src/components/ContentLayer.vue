<script setup lang="ts">
interface IContentLayerProps {
  angle?: number
  top?: string
  left?: string
}

defineProps<IContentLayerProps>()
</script>

<template>
  <section
    id="content"
    :style="{
      position: 'absolute',
      transform: `rotate(${angle ?? 0}turn)`,
      top: top ?? 0,
      left: left ?? 0,
    }"
  >
    <section id="datatime">
      <p id="moment">23:16:24</p>
      <p id="tip">
        今天是<span class="hightlight">2021</span>年<span class="hightlight">5</span>月<span class="hightlight">11</span
        >日<span class="hightlight">星期日</span>，距离下一个休息日<span class="hightlight">周六</span>还有<span
          class="hightlight"
          >1</span
        >天
      </p>
    </section>
    <section id="info">
      <p id="title">今天过什么节</p>
      <ul id="event">
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

#content {
  width: 420px;
}

#datatime {
  margin-bottom: 60px;
}

#moment {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 12px;
}

#title {
  font-size: 28px;
  font-weight: bold;
  text-align: right;
  color: #e81c27;
  padding-bottom: 12px;
  border-bottom: 12px solid black;
}

#event {
  transform: rotate(0.5turn);
}
</style>
