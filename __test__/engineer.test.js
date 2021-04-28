const Engineer = require("../lib/engineer");

test ("can set GitHub account via constructor", () => {
  const testValue = "gitHubUser";
  const eng = new Engineer("Caiman", 1, "caiman@test.com", testValue);
  expect(eng.github).toBe(testValue);
});

test("getPosition() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("Caiman", 1, "caiman@test.com", "GitHubUser");
  expect(eng.getPosition()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Caiman", 1, "caiman@test.com", testValue);
  expect(eng.getGitHub()).toBe(testValue);
});

