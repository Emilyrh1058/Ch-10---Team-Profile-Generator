const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
  const testValue = 25;
  const man = new Manager("Emily", 1, "emily@test.com", testValue);
  expect(man.officeNumber).toBe(testValue);
});

test("getPosition() should return \"Manager\"", () => {
  const testValue = "Manager";
  const man = new Manager("Emily", 1, "emily@test.com", 100);
  expect(man.getPosition()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
  const testValue = 25;
  const man = new Manager("Emily", 1, "emily@test.com", testValue);
  expect(man.getOfficeNumber()).toBe(testValue);
});