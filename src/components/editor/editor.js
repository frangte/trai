import {Editor} from "tiptap";
import {
  Blockquote, Bold,
  BulletList, Code,
  CodeBlock, CodeBlockHighlight,
  HardBreak, Heading, History,
  HorizontalRule, Italic, Link,
  ListItem, OrderedList, Placeholder,
  Strike, TodoItem, TodoList, Underline
} from "tiptap-extensions";
import Doc from "@/components/editor/editor-core/Doc";
import Title from "@/components/editor/editor-core/Title";
import Image from "@/components/editor/editor-core/Image";

import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";

async function uploadFunc(file) {
  console.log(file);
}

const newEditor = function (content, editable) {
  return new Editor({
    autoFocus: true,
    content: content,
    extensions: [
      new CodeBlockHighlight({
        languages: {
          javascript,
          css
        }
      }),
      new Doc(),
      new Title(),
      new Underline(),
      new Blockquote(),
      new BulletList(),
      new CodeBlock(),
      new HardBreak(),
      new Heading({ levels: [1, 2, 3] }),
      new ListItem(),
      new OrderedList(),
      new TodoItem({ nested: true }),
      new TodoList(),
      new Link(),
      new Bold(),
      new Strike(),
      new Code(),
      new Italic(),
      new History(),
      new Image(null, null, uploadFunc),
      new HorizontalRule(),
      new Placeholder({
        showOnlyCurrent: true,
        emptyNodeText: node => {
          if (node.type.name === "title") {
            return "Untitled";
          }
        }
      })
    ],
    editable: editable
  });
}

export default newEditor;
