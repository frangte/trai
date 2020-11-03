<template>
  <div class="editor">
    <editor-content class="content prose font-serif" :editor="editor" />
  </div>
</template>

<script>
import { EditorContent } from "tiptap";
import newEditor from "./editor";

export default {
  name: "Editor",
  props: {
    content: {
      type: String,
      default: ""
    },
    editable: {
      type: Boolean,
      default: true
    },
    fontFamily: {
      type: Number,
      required: false,
    }
  },
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: newEditor(`<p>This is some inserted text. 👋</p>`, true),
      keepInBounds: true,
      linkUrl: null,
      linkMenuIsActive: false
    };
  },
  watch: {
    editable() {
      this.editor.setOptions({
        editable: this.editable
      });
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style lang="scss">
</style>
