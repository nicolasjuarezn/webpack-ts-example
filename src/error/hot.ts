require("./error");

if (module.hot) {
  module.hot.accept("./error.ts", function () {
    console.log("Hot reloading error");
    require("./error");
  });
}
