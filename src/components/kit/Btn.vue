<template>
  <button
    class="flex justify-center py-1 px-2 content-center flex-wrap border rounded border-none outline-none bg-gray-300 hover:bg-gray-400"
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
