interface Options {
    el: HTMLElement;
    childSelector: string;
    columnClassName?: string;
    gridClassName?: string;
}
export default class Granite {
    private el;
    private numColumns;
    private options;
    constructor(options: Options);
    private arrange;
    reflow(): void;
}
export {};
