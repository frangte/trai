<template>
  <div class="">
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>Developing Noteti.me🎉</p>',
  extensions: [
    StarterKit,
  ],
})
</script>
