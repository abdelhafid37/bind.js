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
        `Invalid input passed to bind(),\nbind.js accepts:\n\tstring\n\tElement\n\tNodeList\n\tHTMLCollection\n\tarray of supported inputs`,
        "normalize",
      );
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
