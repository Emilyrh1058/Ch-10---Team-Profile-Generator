const Intern = require("../lib/intern");

test ("Can set school via constructor", () => {
  const testValue = "SFA";
  const int = new Intern("Chris", 1, "chris@test.com", testValue);
  expect(int.school).toBe(testValue);
});

test("getPosition() should return \"Intern\"", () => {
  const testValue = "Intern";
  const int = new Intern("Chris", 1, "chris@test.com", "SFA");
  expect(int.getPosition()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "SFA";
  const int = new Intern("Chris", 1, "chris@test.com", testValue);
  expect(int.getSchool()).toBe(testValue);
});

