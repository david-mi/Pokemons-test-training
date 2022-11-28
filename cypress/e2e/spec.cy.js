
describe('empty spec', () => {

  it("should get to home page and do fetch request", () => {
    cy.visit("http://127.0.0.1:5500/");
  });

  it("should do fetch request to pokemon api", () => {
    cy.intercept("https://pokebuildapi.fr/api/v1/pokemon/").as("pokeapi");
    cy.wait("@pokeapi", { timeout: 20000 });
  });

  it("should show 20 cards after fetch request", () => {
    cy.get(".card", { timeout: 5000 }).its("length").should("eq", 20);
  });

  it("Should show 20 more cards when scrolling to page bottom", () => {
    cy.scrollTo("bottom");
    cy.get(".loader").should("be.visible");
    cy.wait(1000);
    cy.get(".card").its("length").should("eq", 40);
  });

  it("should search for pika", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.intercept("https://pokebuildapi.fr/api/v1/pokemon/").as("pokeapi");
    cy.wait("@pokeapi", { timeout: 20000 });
    cy.get("input").type("pika");
    cy.get(".card").its("length").should("eq", 1);
    cy.get(".card").should("contain.text", "Pikachu");
  });

  it("shoud find 4 cards", () => {
    cy.wait(500);
    cy.get('input').type('{backspace}');
    cy.get(".card").its("length").should("eq", 4);
  });
});

