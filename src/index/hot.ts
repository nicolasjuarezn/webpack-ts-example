require("./index");

if (module.hot) {
  module.hot.accept("./index.ts", function () {
    console.log("Hot reloading index");
    require("./index");
  });
}