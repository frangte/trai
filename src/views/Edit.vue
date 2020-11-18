<template>
  <div>
    <div class="flex flex-wrap content-center items-center h-12 sticky top-0 z-10">
      <div class="flex flex-wrap ml-2 content-center">Name document</div>
      <div class="flex flex-wrap ml-auto mr-2">
        <btn @click="changeEditable">
          <span v-if="editable">Save</span>
          <span v-else>Edit</span>
        </btn>
      </div>
    </div>

    <div class="grid grid-w-full xl:grid-cols-12 grid-cols-6">
      <div class="xl:col-span-3 col-span-1" />
      <editor :fontFamily="editorFont" class="xl:col-span-6 col-span-4 max-w-full" :editable="editable"/>
      <div class="xl:col-span-3 col-span-1" />
    </div>
  </div>
</template>

<script>
import Editor from "@/components/editor/Editor";
import Btn from "@/components/kit/Btn";

export default {
  name: "Edit",
  components: {
    Btn,
    Editor
  },
  data() {
    return {
      editorFont: 'font-serif',
      editable: false,
      content: '',
      collection: {},
      document: {},
    }
  },
  methods: {
    changeEditable() {
      this.editable = !this.editable;
    }
  }
}
</script>
