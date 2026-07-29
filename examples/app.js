// Playground

const logger = (...args) =>
  args.forEach((arg, i) => console.log(`${i + 1} =>`, arg));

logger(
  bind(),
  bind("div"),
  bind(document.body),
  bind(document.querySelectorAll("div")),
  bind(document.children),
  bind([document.body]),
  bind([[document.body]]),
  bind([document.body, document.body]),
  bind(123),
  bind(Symbol()),
  bind({}),
  bind("???"),
);
