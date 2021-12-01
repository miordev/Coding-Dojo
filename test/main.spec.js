const { Grid } = require("../src/main");

describe("all tests", () => {
  describe("comportamiento del grid", () => {
    it("comprobar tamaño del grid", () => {
      const grid = new Grid(2, 5);
      expect(grid.toString()).toEqual("[2,5]");
      // expect(grid.length).toEqual(2);
    });
  });
});
