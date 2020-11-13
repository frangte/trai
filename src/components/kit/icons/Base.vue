<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-archive"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :stroke-width="stroke"
    :stroke="color"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="icons[name]"
  ></svg>
</template>

<script>
const icons = require('./icons.json')

export default {
  name: 'Base',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    },
    stroke: {
      type: Number,
      default: 1.5
    },
    color: {
      type: String,
      default: '#6733a2'
    }
  },
  data() {
    return {
      icons,
    }
  },
}
</script>
