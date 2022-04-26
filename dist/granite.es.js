var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const debounce = (f, ms = 30) => {
  let handle;
  return (...args) => {
    if (handle === void 0) {
      handle = setTimeout(() => {
        handle = void 0;
        f(...args);
      }, ms);
    }
  };
};
class Granite {
  constructor(options) {
    __publicField(this, "el");
    __publicField(this, "numColumns", 0);
    __publicField(this, "options");
    if (options.el === void 0) {
      throw Error('options missing "el"');
    }
    if (options.childSelector === void 0) {
      throw Error('options missing "childSelector"');
    }
    this.options = options;
    this.el = options.el;
    if (options.gridClassName) {
      this.el.classList.add(options.gridClassName);
    }
    window.addEventListener("resize", debounce(this.reflow.bind(this)));
    this.numColumns = 0;
    this.reflow();
  }
  arrange(numColumns) {
    const cells = this.el.querySelectorAll(this.options.childSelector);
    const columns = Array(numColumns);
    for (let i = 0; i < columns.length; ++i) {
      const column = document.createElement("div");
      if (this.options.columnClassName) {
        column.className = this.options.columnClassName;
      }
      column.style.width = `${100 / numColumns}%`;
      columns[i] = column;
    }
    cells.forEach((cell, index) => {
      columns[index % numColumns].appendChild(cell);
    });
    this.el.innerHTML = "";
    columns.forEach((column) => {
      this.el.appendChild(column);
    });
  }
  reflow() {
    let numColumns = parseInt(getComputedStyle(this.el).getPropertyValue("--num-columns"));
    if (isNaN(numColumns)) {
      numColumns = 1;
    }
    if (numColumns !== this.numColumns) {
      this.numColumns = numColumns;
      this.arrange(this.numColumns);
    }
  }
}
export { Granite as default };
