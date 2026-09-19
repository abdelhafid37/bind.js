// Playground

const logger = (...args) => args.forEach((arg, i) => console.log(`${String(i + 1).padStart(2, "0")}:`, arg));

logger(
  // bind(),
  // bind("div"),
  // bind(document.body),
  // bind(document.querySelectorAll("div")),
  // bind(document.children),
  // bind([document.body]),
  // bind([[document.body]]),
  // bind([document.body, document.body]),
  // bind(123),
  // bind(Symbol()),
  // bind({}),
  // bind("???"),
  // bind(bind("div")),
  bind([bind("div"), document.body]),
);
