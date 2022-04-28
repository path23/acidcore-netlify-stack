import faker from "@faker-js/faker";

describe("smoke tests", () => {
  it("should show the stack title", () => {
    cy.visit("/");
    cy.get("h1").contains("Acidcore Stack");
  });
});
