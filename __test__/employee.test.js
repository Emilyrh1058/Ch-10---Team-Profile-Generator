const Employee = require("../lib/employee");
const fs = require('fs');

test("Can instantiate Employee instance", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Emily";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 1;
  const emp = new Employee("Salem", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "salem@test.com";
  const emp = new Employee("Salem", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Salem";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 2;
  const emp = new Employee("Salem", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "salem@test.com";
  const emp = new Employee("Salem", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getPosition() should return \"Employee\"", () => {
  const testValue = "Employee";
  const emp = new Employee("Salem", 1, "salem@test.com");
  expect(emp.getPosition()).toBe(testValue);
});