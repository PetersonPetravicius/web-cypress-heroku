

describe('Transações', () => {

beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")
});

    it('Cadastrar uma entrada', () => {
        
        criarTransacao("Deposito pix", 133, "2024-03-27")
        cy.get("tr[data-index='0'] td.description").should("have.text", "Deposito pix");
        cy.get("tr[data-index='0'] td.income").should("contain.text", "R$");
        cy.get("tr[data-index='0'] td.date").should("have.text", "27/03/2024");
       
        criarTransacao("Deposito boleto", 254.76, "2024-03-29")
        cy.get("tr[data-index='1'] td.description").should("have.text", "Deposito boleto");
        cy.get("tr[data-index='1'] td.income").should("contain.text", "R$");
        cy.get("tr[data-index='1'] td.date").should("have.text", "29/03/2024");

        criarTransacao("Dinheiro achado na rua", 15643.98, "2024-03-30")
        cy.get("tr[data-index='2'] td.description").should("have.text", "Dinheiro achado na rua");
        cy.get("tr[data-index='2'] td.income").should("contain.text", "R$");
        cy.get("tr[data-index='2'] td.date").should("have.text", "30/03/2024");

        criarTransacao("Pizzaria sabado", -48.50, "2024-04-02")
        cy.get("tr[data-index='3'] td.description").should("have.text", "Pizzaria sabado")
        cy.get("tr[data-index='3'] td.date").should("have.text", "02/04/2024");

    });



    it('Cadastrar uma saída', () => {

        criarTransacao("Pizzaria domingo", -78.83, "2024-04-02")
        cy.get("tbody tr td.description").should("have.text", "Pizzaria domingo")
        cy.get("tbody tr td.date").should("have.text", "02/04/2024")
    });

    it('Excluir uma entrada', () => {

        criarTransacao("Emprestimo", 5786.99, "2024-04-02")
        cy.contains(".description", "Emprestimo")
        .parent()
        .find('img')
        .click()
    });

    it('Excluir uma saída', () => {

        criarTransacao("iPhone 14 pro max 256gb", -5786.54, "2024-04-02")
        cy.contains(".description", "iPhone 14 pro max 256gb")
        .siblings()
        .children('img')
        .click()
    });

    function criarTransacao(descricao, valor, data){

        cy.contains("+ Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type(data)
        cy.contains('button', 'Salvar').click()
    }
});