const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it("Constructor should assign values to object", () => {
    const manager = new Manager("Brittani", "28", "brittani28@gmail.com", "4199531492");

    expect(manager.name).toBe("Brittani");
    expect(manager.id).toBe("28");
    expect(manager.email).toBe("brittani28@gmail.com");
    expect(manager.officeNumber).toBe("4199531492");
  });
  it("getRole should return manager", () => {
    const manager = new Manager("Brittani", "28", "brittani28@gmail.com", "4199531492");

    expect(manager.getRole()).toBe("Manager");
  });
});