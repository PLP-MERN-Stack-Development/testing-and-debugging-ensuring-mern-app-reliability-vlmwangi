const validateBug = require("../../src/utils/validateBug");

test("should fail when title is missing", () => {
  expect(validateBug({ description: "desc" })).toBe(false);
});
