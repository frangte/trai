<template>
  <div class="editor">
    <editor-content
      class="content prose max-w-none" :editor="editor"
      :class="fontFamily"
    />
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
      type: String,
    }
  },
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: newEditor(this.content, this.editable),
      keepInBounds: true,
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
