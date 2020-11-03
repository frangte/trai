import {Node, Plugin} from "tiptap";
import {nodeInputRule} from "tiptap-commands";

const IMAGE_INPUT_REGEX = /!\[(.+|:?)\]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export default class Image extends Node {
  constructor(name, parent, uploadFunc = null) {
    super(name, parent);
    this.uploadFunc = uploadFunc;
  }

  get name() {
    return "image"
  }

  get schema() {
    return {
      content: "inline*",
      attrs: {src: {default: ""}, title: {default: ""}},
      group: "block",
      draggable: true,
      selectable: true,
      parseDOM: [{
        tag: "figure",
        contentElement: "figcaption",
        getAttrs(dom) {
          let img = dom.querySelector("img")
          return {src: img.getAttribute('src'), title: img.getAttribute('alt')}
        }
      }],
      toDOM: node => [
        "figure",
        ["img", {...node.attrs, contentEditable: false}],
        ["p", {}, 0],
      ],
    }
  }

  commands({ type }) {
    return attrs => (state, dispatch) => {
      const { selection } = state
      const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos
      const node = type.create(attrs)
      const transaction = state.tr.insert(position, node)
      dispatch(transaction)
    }
  }

  inputRules({ type }) {
    return [
      nodeInputRule(IMAGE_INPUT_REGEX, type, match => {
        const [, alt, src, title] = match;
        return {
          src,
          alt,
          title
        };
      })
    ];
  }

  get plugins() {
    const upload = this.uploadFunc;
    return [
      new Plugin({
        props: {
          handlePaste(view, event) {
            const items = (
              event.clipboardData || event.originalEvent.clipboardData
            ).items;
            for (const item of items) {
              if (item.type.indexOf("image") === 0) {
                event.preventDefault();
                const { schema } = view.state;

                const image = item.getAsFile();

                if (upload) {
                  upload(image).then(src => {
                    const node = schema.nodes.image.create({
                      src: src
                    });
                    const transaction = view.state.tr.replaceSelectionWith(
                      node
                    );
                    view.dispatch(transaction);
                  });
                } else {
                  /* eslint-disable */
                  reader.onload = readerEvent => {
                    const node = schema.nodes.image.create({
                      src: readerEvent.target.result
                    });
                    const transaction = view.state.tr.replaceSelectionWith(
                      node
                    );
                    view.dispatch(transaction);
                  };
                  reader.readAsDataURL(image);
                }
              }
            }
            return false;
          },
          handleDOMEvents: {
            drop(view, event) {
              const hasFiles =
                event.dataTransfer &&
                event.dataTransfer.files &&
                event.dataTransfer.files.length;

              if (!hasFiles) {
                return;
              }

              const images = Array.from(event.dataTransfer.files).filter(file =>
                /image/i.test(file.type)
              );

              if (images.length === 0) {
                return;
              }

              event.preventDefault();

              const { schema } = view.state;
              const coordinates = view.posAtCoords({
                left: event.clientX,
                top: event.clientY
              });

              images.forEach(async image => {
                const reader = new FileReader();

                if (upload) {
                  const node = schema.nodes.image.create({
                    src: await upload(image)
                  });
                  const transaction = view.state.tr.insert(
                    coordinates.pos,
                    node
                  );
                  view.dispatch(transaction);
                } else {
                  reader.onload = readerEvent => {
                    const node = schema.nodes.image.create({
                      src: readerEvent.target.result
                    });
                    const transaction = view.state.tr.insert(
                      coordinates.pos,
                      node
                    );
                    view.dispatch(transaction);
                  };
                  reader.readAsDataURL(image);
                }
              }
              );
            }
          }
        }
      })
    ];
  }
}
