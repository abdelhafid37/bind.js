(() => {
  if (typeof window === "undefined" || typeof document === "undefined" || !(document instanceof Document))
    throw new Error("bind.js requires a DOM environment.");

  class BindError extends Error {
    constructor(message, at) {
      super(message);
      this.name = "BindError";
      this.at = at;
    }
  }

  class Bind {
    constructor(input) {
      this.#elements = [...new Set(this.#normalize(input))].filter(Boolean);
    }

    #elements = [];

    #normalize(input) {
      if (input === undefined) return [];

      if (typeof input === "string") return [...document.querySelectorAll(input)];

      if (input instanceof Element) return [input];

      if (input instanceof NodeList || input instanceof HTMLCollection) return [...input];

      if (input instanceof Bind) return input.#elements;

      if (Array.isArray(input)) return input.flatMap((item) => this.#normalize(item));

      throw new BindError(
        "Invalid input passed to bind(),\nbind.js accepts:\n\tstring\n\tElement\n\tNodeList\n\tHTMLCollection\n\tarray of supported inputs",
        "normalize",
      );
    }

    get length() {
      return this.#elements.length;
    }

    get(index) {
      if (index !== undefined && (typeof index !== "number" || isNaN(index)))
        throw new BindError("Invalid index passed to Bind's get method", "get");

      if (index === undefined || index >= this.length || index < -this.length) return;

      return this.#elements.at(index);
    }

    getAll() {
      return [...this.#elements];
    }

    each(callbackfn) {
      if (callbackfn === undefined || typeof callbackfn !== "function")
        throw new BindError("Invalid callback passed to Bind's each method", "each");

      this.#elements.forEach((element, elementIndex) => callbackfn(element, elementIndex));

      return this;
    }

    at(index) {
      if (typeof index !== "number" || isNaN(index))
        throw new BindError("Invalid index passed to Bind's at method", "at");

      const element = this.get(index);

      if (element === undefined) return new Bind();

      return new Bind(element);
    }

    first() {
      return this.at(0);
    }

    last() {
      return this.at(-1);
    }
  }

  function bind(input) {
    return new Bind(input);
  }

  bind.version = "0.1.0-alpha";

  window.bind = bind;
  window._ = bind;
  window.$ = bind;
})();
