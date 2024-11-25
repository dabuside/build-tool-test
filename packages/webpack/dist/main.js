(() => {
  "use strict";
  !(async function (...o) {
    await new Promise((o) => setTimeout(o, 0)), console.log(o);
  })("from npm package"),
    (async function (...o) {
      await new Promise((o) => setTimeout(o, 0)), console.log(o);
    })("from source code");
})();
