# Granite

Granite is a lightweight (<1KiB) masonry-like library.

# Install

`npm install`

# Usage

Call the Granite constructor with an `options` object, specifying:
- `el` (required): the root element for the layout
- `childSelector` (required): a CSS selector for the child elements, which will be distributed between a number of columns.
- `columnClassName` (optional): Granite creates a number of child columns for arranging the child elements. If specified, this class name will be applied to the columns, and can be used for furhter styling.
- `gridClassName` (optional): If specified, Granite will add this class name to the root element. This can be used to distinguish styles when JavaScript is not enabled.

To specify the number of columns, use the CSS variable `--num-columns` on the root element:
```CSS
.granite {
  --num-columns: 1;
}

@media (min-width: 500px) {
  .granite {
    --num-columns: 2;
  }
}

@media (min-width: 800px) {
  .granite {
    --num-columns: 4;
  }
}
```

# Example

```js
import Granite from './granite';
new Granite({
  el: el,
  childSelector: '.cell',
  columnClassName: 'granite-column',
  gridClassName: 'granite',
});
```

# Demo

Run the demo with `npm run dev`. This demo uses images from savee.com.

# Distribution

Build for distribution with `npm run build`.
