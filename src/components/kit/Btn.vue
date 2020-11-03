<template>
  <button
    class="flex justify-center w-12 h-12 content-center flex-wrap border rounded border-none outline-none"
    @click="callback($event)"
    :class="active ? 'bg-gray-400' : ''"
    style="outline: none"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
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
