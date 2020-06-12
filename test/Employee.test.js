const Employee = require("../lib/Employee");

//test for creation of employee
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

//test for check the name of employee
test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

//test for check the employee id of employee
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(100).toBe(testValue);
});

//test for check the email id of employee
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

//test for check the name of the employee
test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

//test for check the data of an employee
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

//test for check the data of an employee
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

//test for check the role of an employee
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
