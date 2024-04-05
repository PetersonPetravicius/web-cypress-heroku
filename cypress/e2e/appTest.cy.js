

beforeEach(() => {
  cy.visit("https://the-internet.herokuapp.com/challenging_dom")
});


describe.skip('Botões dinamicos coloridos', () => {

    it("Deve clicar em todos botões", () => {

        cy.get("div a.button").should("have.css", "background-color", "rgb(43, 166, 203)");
        cy.get("div a.button.alert").click();
        cy.get(" div a.button.success").click();

    });

    it("Deve clicar apenas no primeiro botão", () => {

        cy.get("div a.button").should("have.css", "background-color", "rgb(43, 166, 203)");

      });

    it("Deve clicar apenas no segundo botão", () => {

        cy.get("div a.button.alert").click();

      });

    it("Deve clicar apenas no terceiro botão", () => {

        cy.get("div a.button.success").click();

      });
});

describe('Coluna Action', () => {

    it('Deve clicar em todos botões edit e delete da Coluna Action', () => {

      for (let i = 1; i < 11; i++) {
        cy.get(`tr:nth-child(${i}) td a[href="#edit"]`).click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#edit');
        cy.get(`tr:nth-child(${i}) td a[href="#delete"]`).click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#delete');
      }

    });

    it('Deve clicar apenas no botões edit e delete da 1º linha da Coluna Action', () => {

      cy.get(`tr:nth-child(1) td a[href="#edit"]`).click();
      cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#edit');
      cy.get(`tr:nth-child(1) td a[href="#delete"]`).click();
      cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#delete');


  });

    it('Deve clicar apenas no botões edit e delete da 5º linha da Coluna Action', () => {

        cy.get(`tr:nth-child(5) td a[href="#edit"]`).click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#edit');
        cy.get(`tr:nth-child(5) td a[href="#delete"]`).click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#delete');
  

    });

    it('Deve clicar apenas no botões edit e delete da 10º linha da Coluna Action', () => {

      cy.get(`tr:nth-child(10) td a[href="#edit"]`).click();
      cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#edit');
      cy.get(`tr:nth-child(10) td a[href="#delete"]`).click();
      cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#delete');


  });
  
});

