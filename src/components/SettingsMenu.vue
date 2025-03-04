<script setup lang="ts">
import { ref, defineModel } from 'vue'
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

    <div v-if="isOpen" class="settings-menu">
      <div class="settings-header">
        <h3>设置</h3>
        <button class="close-button" @click="toggleMenu">×</button>
      </div>
      <div class="settings-content">
        <div class="setting-item">
          <label>模式</label>
          <ModeSelector v-model="modelValue" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.settings-menu {
  position: absolute;
  right: 0;
  bottom: 100%;

  min-width: 300px;
  margin-bottom: 8px;
  padding: 16px;

  background: #fefdf5;
  border: 1px solid #8f8148;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    margin: 0;
    color: #8f8148;
  }

  .close-button {
    cursor: pointer;

    padding: 4px 8px;

    font-size: 24px;
    color: #8f8148;

    background: none;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }
}

.settings-content {
  .setting-item {
    label {
      display: block;
      margin-bottom: 8px;
      color: #8f8148;
    }
  }
}
</style>
