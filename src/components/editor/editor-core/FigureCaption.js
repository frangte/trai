import { Node } from 'tiptap'

export default class Figcaption extends Node {
  get name() {
    return "figcaption"
  }

  get schema() {
    return {
      content: "inline*",
      group: "figure",
      attrs: { attribution: { default: "" } },
      parseDOM: [
        { tag: "img", getAttrs: dom => ({ attribution: dom.dataset.attribution }) },
        { tag: "figcaption" }
      ],
      toDOM: node => {
        return [
          "figcaption",
          {
            contenteditable: node.attrs.attribution ? false : true,
          },
          node.attrs.attribution || "Add attribution here"
        ]
      },
    }
  }
}
