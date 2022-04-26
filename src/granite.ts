const debounce = (f: Function, ms = 30) => {
  let handle : number | undefined;
  return (...args: any[]) => {
    if (handle === undefined) {
      handle = setTimeout(() => {
        handle = undefined;
        f(...args)
      }, ms);
    }
  }
}

interface Options {
  el: HTMLElement;
  childSelector: string;
  columnClassName?: string;
  gridClassName?: string;
}

export default class Granite {
  private el: HTMLElement;
  private numColumns = 0;
  private options: Options;

  constructor(options: Options) {
    if (options.el === undefined) {
      throw Error('options missing "el"')
    }
    if (options.childSelector === undefined) {
      throw Error('options missing "childSelector"')
    }
    this.options = options;
    this.el = options.el;
    if (options.gridClassName) {
      this.el.classList.add(options.gridClassName);
    }

    window.addEventListener('resize', debounce(this.reflow.bind(this)));
    this.numColumns = 0;
    this.reflow();
  }

  private arrange(numColumns: number) {
    const cells = this.el.querySelectorAll(this.options.childSelector);
    const columns = Array(numColumns);

    for (let i = 0; i < columns.length; ++i) {
      const column = document.createElement('div');
      if (this.options.columnClassName) {
        column.className = this.options.columnClassName;
      }

      column.style.width = `${100  / numColumns}%`;
      columns[i] = column;
    }

    cells.forEach((cell, index) => {
      columns[index % numColumns].appendChild(cell);
    });

    this.el.innerHTML = '';
    columns.forEach(column => {
      this.el.appendChild(column);
    });
  }

  reflow() {
    let numColumns = parseInt(getComputedStyle(this.el).getPropertyValue('--num-columns'));
    if (isNaN(numColumns)) {
      numColumns = 1;
    }

    if (numColumns !== this.numColumns) {
      this.numColumns = numColumns;
      this.arrange(this.numColumns);
    }
  }
}

