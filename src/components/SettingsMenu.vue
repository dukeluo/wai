<script setup lang="ts">
import { ref } from 'vue'
import ModeSelector from './ModeSelector.vue'
import { Mode } from '../types'

const isOpen = ref(false)
const modelValue = defineModel<Mode>({ required: true })

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="settings-container">
    <button class="settings-button" @click="toggleMenu">
      <img src="/icons/settings.svg" alt="Settings" />
    </button>

    <Transition name="slide">
      <div v-if="isOpen" class="settings-overlay" @click="toggleMenu">
        <div class="settings-menu" @click.stop>
          <div class="settings-header">
            <h3>设置</h3>
            <img class="close-button" src="/icons/close.svg" alt="Close" @click="toggleMenu" />
          </div>
          <div class="settings-content">
            <div class="setting-item">
              <label>模式</label>
              <ModeSelector v-model="modelValue" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@import '../variables';

.settings-container {
  position: relative;
}

.settings-button {
  cursor: pointer;
  padding: 8px;
  background: none;
  border: none;

  img {
    width: 24px;
    height: 24px;
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

  .close-button {
    cursor: pointer;
    width: 32px;
    height: 32px;

    &:hover {
      opacity: 0.7;
    }
  }
}

.settings-content {
  .setting-item {
    label {
      display: block;
      margin-bottom: 8px;
      color: $color-accent;
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
