const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  it("Constructor should assign values to object", () => {
    const intern = new Intern("Brittani", "28", "brittani28@gmail.com", "OSU");

    expect(intern.name).toBe("Brittani");
    expect(intern.id).toBe("28");
    expect(intern.email).toBe("brittani28@gmail.com");
    expect(intern.school).toBe("OSU");
  });
  it("getRole should return intern", () => {
    const intern = new Intern("Brittani", "28", "brittani28@gmail.com", "OSU");

    expect(intern.getRole()).toBe("Intern");
  });
});