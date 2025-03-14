<script setup lang="ts">
import { ref } from 'vue'
import ModeSelector from './ModeSelector.vue'
import { Mode } from '../types'
import { useLatestUpdate } from '../composables/useLatestUpdateApi'

const isOpen = ref(false)
const modelValue = defineModel<Mode>({ required: true })
const { latestUpdate } = useLatestUpdate()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="settings-container">
    <img src="/icons/settings.svg" alt="Settings" class="icon-button" @click="toggleMenu" />

    <Transition name="slide">
      <div v-if="isOpen" class="settings-overlay" @click="toggleMenu">
        <div class="settings-menu" @click.stop>
          <div class="settings-header">
            <h3>设置</h3>
            <img class="icon-button" src="/icons/close.svg" alt="Close" @click="toggleMenu" />
          </div>
          <div class="settings-content">
            <div class="setting-item">
              <label>模式</label>
              <ModeSelector v-model="modelValue" />
            </div>
            <template v-if="latestUpdate?.message">
              <div class="setting-item">
                <label>最新动态</label>
                <div class="about-content">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <p class="about-description" v-html="latestUpdate.message" />
                </div>
              </div>
            </template>
            <div class="setting-item">
              <label>关于</label>
              <div class="about-content">
                <p class="about-description">感谢使用歪脖子，这是一个有趣好玩的新标签页扩展，希望它对你能有所帮助。</p>
                <div class="links-section">
                  <a href="https://github.com/dukeluo/wai" target="_blank" class="link-item">
                    <img src="/icons/code.svg" alt="Source Code" />
                    <span>查看源码</span>
                  </a>
                  <a href="https://x.com/ihuanluo" target="_blank" class="link-item">
                    <img src="/icons/x.svg" alt="X" />
                    <span>在 X 上关注作者</span>
                  </a>
                  <a href="https://shaiwang.life" target="_blank" class="link-item">
                    <img src="/icons/blog.svg" alt="Blog" />
                    <span>访问作者博客</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="setting-item">
              <label>支持作者</label>
              <div class="about-content">
                <p class="about-description">如果你喜欢这个项目，可以通过以下方式支持作者继续创作。</p>
                <div class="qr-section">
                  <div class="qr-item">
                    <img src="/images/wechat.webp" alt="Donation QR Code" />
                  </div>
                </div>
                <div class="support-options">
                  <a href="https://github.com/sponsors/dukeluo" target="_blank" class="link-item">
                    <img src="/icons/github.svg" alt="GitHub Sponsors" />
                    <span>GitHub Sponsors</span>
                  </a>
                  <a href="https://ko-fi.com/huanluo" target="_blank" class="link-item">
                    <img src="/icons/kofi.svg" alt="Ko-fi" />
                    <span>Ko-fi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';

/* stylelint-disable-next-line order/order */
@import '../variables';

.settings-container {
  position: relative;
}

.icon-button {
  cursor: pointer;
  width: 28px;
  height: 28px;

  &:hover {
    opacity: 0.7;
  }
}

.settings-overlay {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.settings-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  overflow-y: auto;

  width: 400px;
  padding: 24px;

  background: $color-text-light;
}

.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h3 {
    margin: 0;
    color: $color-accent;
  }
}

.settings-content {
  .setting-item {
    margin-bottom: 24px;

    label {
      display: block;
      margin-bottom: 12px;
      font-size: 1.1em;
      color: $color-accent;
    }
  }
}

.about-content {
  .about-description {
    margin: 0 0 24px;
    line-height: 1.5;
    color: $color-text-dark;
  }
}

.links-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-item {
  display: flex;
  gap: 12px;
  align-items: center;

  padding: 12px;
  border-radius: 6px;

  color: $color-text-dark;
  text-decoration: none;

  transition: background-color 0.2s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: color.adjust($color-primary, $lightness: -2%);
  }
}

.support-options {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.qr-section {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.qr-item {
  img {
    width: 180px;
    height: 180px;
    padding: 8px;
    border-radius: 12px;

    background: $color-text-light;
    box-shadow: 0 2px 12px #{$color-shadow};

    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px color.adjust($color-shadow, $alpha: 0.1);
    }
  }
}

// Slide animation
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
