const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  it("Constructor should assign values to object", () => {
    const engineer = new Engineer("Brittani", "28", "brittani28@gmail.com", "brittanigit");

    expect(engineer.name).toBe("Brittani");
    expect(engineer.id).toBe("28");
    expect(engineer.email).toBe("brittani28@gmail.com");
    expect(engineer.github).toBe("brittanigit");
  });
  it("getRole should return engineer", () => {
    const engineer = new Engineer("Brittani", "28", "brittani28@gmail.com", "brittanigit");

    expect(engineer.getRole()).toBe("Engineer");
  });
});