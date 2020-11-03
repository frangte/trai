<template>
  <div>
    <div class="flex flex-wrap flex-row content-center h-12 bg-blue-100">
      <div class="ml-2">Name document</div>
      <div class="ml-auto mr-2">

      </div>
    </div>
    <div class="grid grid-w-full xl:grid-cols-3 grid-cols-1">
      <div />
      <editor />
      <div />
    </div>
  </div>
</template>

<script>
import Editor from "@/components/editor/Editor";

export default {
  name: "Edit",
  components: {
    Editor
  }
}
</script>
