<template>
  <button
      class="flex justify-center w-10 h-10 content-center flex-wrap border rounded bg-gray-300 border-none outline-none hover:bg-gray-400"
      @click="callback($event)"
      :class="active ? 'bg-gray-400' : ''"
      style="outline: none"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "NavBtn",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    callback(event) {
      this.$emit('click', event);
    }
  }
}
</script>
