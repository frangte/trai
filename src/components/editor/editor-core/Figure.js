import { Node } from 'tiptap'
import { Plugin } from 'prosemirror-state'

export default class Figure extends Node {

  get name() {
    return "figure";
  }

  get schema() {
    /* eslint-disable */
    return {
      content: "image",
      group: "block",
      parseDOM: [{tag: "figure"}],
      toDOM: node => ["figure", 0],
    };
  }

  // Deletes the entire figure node if imageNode is empty.
  get plugins() {
    return [
      new Plugin ({
        appendTransaction: (transactions, oldState, newState) => {
          const tr = newState.tr
          let modified = false;
          // TO-DO: Iterate through transactions instead of descendants.

          /* eslint-disable */
          newState.doc.descendants((node, pos, parent) => {
            if (node.type.name != "figure") return;
            let imageNode = node.firstChild;
            if (imageNode.attrs.src == imageNode.type.defaultAttrs.src &&
              imageNode.attrs.alt == imageNode.type.defaultAttrs.alt)
            {
              tr.deleteRange(pos, pos + node.nodeSize);
              modified = true;
            }
          })
          if (modified) return tr;
        }
      })
    ];
  }

}
