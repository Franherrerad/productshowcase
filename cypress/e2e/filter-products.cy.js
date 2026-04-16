describe("Filtrado de productos", () => {
  it("el usuario filtra productos y ve resultados", () => {
    cy.visit("http://localhost:8080");

    cy.get("select").select("electronics");

    cy.contains("electronics").should("exist");
  });
});