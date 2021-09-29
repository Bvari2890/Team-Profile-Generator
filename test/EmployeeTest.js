const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("Constructor should assign values to object", () => {
    const employee = new Employee("Brittani", "28", "brittani28@gmail.com");

    expect(employee.name).toBe("Brittani");
    expect(employee.id).toBe("28");
    expect(employee.email).toBe("brittani28@gmail.com");
  });
});