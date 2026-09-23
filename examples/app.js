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
  //! bind(123),
  //! bind(Symbol()),
  //! bind({}),
  //! bind("???"),
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
  //! bind("div").get("non-number-parameter"),
  //! bind("div").get(NaN),
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

//? Collection Selection - at(index)
logger([
  // bind("div").at(0),
  // bind("div").at(1),
  // bind("div").at(2),
  // bind("div").at(-1),
  // bind("div").at(-2),
  // bind("div").at(999),
  // bind("div").at(-999),
  //! bind("div").at(),
  //! bind("div").at("invalid"),
  //! bind("div").at(NaN),
  // bind("div").at(0).length,
  // bind("div").at(999).length,
  // bind("div").at(0).get(0),
  // bind("div").at(-1).get(0),
]);
// const collection = bind("div");
// const selected = collection.at(0);
// console.log(collection !== selected);

//? Collection Selection - first()
logger([
  // bind("div").first(),
  // bind().first(),
  // bind("div").first().length,
  // bind().first().length,
]);

//? Collection Selection - last()
logger([
  // bind("div").last(),
  // bind().last(),
  // bind("div").last().length,
  // bind().last().length,
]);
