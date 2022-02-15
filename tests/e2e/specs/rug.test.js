/// <reference types="cypress" />

const URL = "http://192.168.1.8:8080/";

context("Random User Generator", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Layout", () => {
    it("Checks the layout has been loaded correctly.", () => {
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(166, 217, 247)"
      );
      cy.get(".container").should(
        "have.css",
        "background-color",
        "rgb(255, 255, 255)"
      );
      cy.get(".container").should("contain", "Random User Generator");
      cy.get(".container button")
        .should("contain", "Get Random User")
        .and("have.css", "background-color", "rgb(93, 193, 251)");
    });
  });
  describe("Functionality", () => {
    it("Visit the page and make sure it loads a random user.", () => {
      cy.visit(URL);
      cy.get(".container h2").should("contain", "Loading...");
      cy.get(".container p").first().should("contain", "Loading...");
      cy.get(".container p").last().should("contain", "Loading...");
      cy.wait(500);
      cy.get(".container h2").should("not.contain", "Loading...");
      cy.get(".container p").first().should("not.contain", "Loading...");
      cy.get(".container p").last().should("not.contain", "Loading...");
    });
    it("Clicks the button and changes brings another random user.", () => {
      let firstUser = {};
      cy.get(".container h2").then(
        (title) => (firstUser.name = title[0].textContent)
      );
      cy.get(".container p")
        .first()
        .then((title) => (firstUser.city = title[0].textContent.split(" ")[2]));
      cy.get(".container p")
        .last()
        .then((title) => (firstUser.email = title[0].textContent));
      cy.get(".container button").click();
      cy.get(".container h2").should((newName) => {
        expect(newName[0].textContent).to.not.equal(firstUser.name);
      });
      cy.get(".container p")
        .first()
        .should((newCity) => {
          expect(newCity[0].textContent.split(" ")[2]).to.not.equal(
            firstUser.city
          );
        });
      cy.get(".container p")
        .last()
        .should((newEmail) => {
          expect(newEmail[0].textContent).to.not.equal(firstUser.email);
        });
    });
  });
});
