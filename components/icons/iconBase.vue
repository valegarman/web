<template>
  <svg
    :class="className"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    @click="() => $emit('click')"
  >
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    viewBox: {
      type: String,
      default: '0 0 18 18',
    },
    className: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}

.linkPointer {
  cursor: pointer;
}
</style>
