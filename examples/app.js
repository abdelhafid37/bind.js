// Playground

const logger = (inputs = []) => inputs.forEach((input, i) => console.log(`${String(i + 1).padStart(2, "0")}:`, input));

//? Core Engine
logger([
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
  // bind([bind("div"), document.body]),
]);

//? Aliases
logger([
  // bind("div"),
  // _("div"),
  // $("div"),
]);

//? Collection Access - length
logger([
  // bind().length,
  // bind("div").length,
  // bind(document.body).length,
  // bind([bind("div"), document.body]).length,
]);

//? Collection Access - get(index)
logger([
  // bind("div").get(0),
  // bind("div").get(1),
  // bind("div").get(2),
  // bind("div").get(-1),
  // bind("div").get(-2),
  // bind("div").get(999),
  // bind("div").get(-999),
  // bind("div").get(),
  // bind("div").get("non-number-parameter"),
  // bind("div").get(NaN),
  // bind().get(0),
]);

//? Collection Access - getAll()
logger([
  // bind("div").getAll(),
  // bind().getAll(),
  // bind("div").getAll().length,
  // bind("div").getAll().push(document.createElement("p")),
  // bind("div").getAll(),
]);

//? Collection Access - each()
// bind("div").each((element, index) => console.log(element, index));
// bind().each((element, index) => console.log(element, index));
// bind("div").each();
// bind("div").each("non-function-callback");
// const collection = bind("div");
// const result = collection.each(() => {});
// console.log(collection === result);
