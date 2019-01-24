/// <reference types="Cypress" />

context('Root', () => {
    beforeEach(() => {
        visitRootPage();
    });

    it('shows root page', () => {
        cy.contains('Your root is empty');
    });

    it("Shows an icon", () => {
        cy.get('.anticon-team');
    });
});

context('Router redirects', () => {
    it('to root (redirect)', () => {
        cy.visit('http://localhost:8080/');        
    });
    it("to dashboard (redirect)", () => {
        cy.visit('http://localhost:8080/dashboard');
    });
    it("to example (redirect)", () => {
        cy.visit('http://localhost:8080/example');
    });
    it("to testPage page (redirect)", () => {
        cy.visit('http://localhost:8080/testPage');
    });
    it("to 404 page (redirect)", () => {
        cy.visit('http://localhost:8080/404');
    });
});

context('Navigates', () => {
    
    it('to root', () => {
        visit404Page();
        cy.get('.ant-menu-item a').eq(0).click();
        cy.url().should('eq', 'http://localhost:8080/');
    });
    it('to dashboard', () => {
        visit404Page();
        cy.get('.ant-menu-item a').eq(1).click();
        cy.url().should('eq', 'http://localhost:8080/dashboard');
    });
    it('to example', () => {
        visit404Page();
        cy.get('.ant-menu-item a').eq(2).click();
        cy.url().should('eq', 'http://localhost:8080/example');
    });
    it('to test page', () => {
        visitDashboardPage();
        cy.get('.ant-menu-item a').eq(3).click();
        cy.url().should('eq', 'http://localhost:8080/testPage');
    });
    it('to 404', () => {
        visitDashboardPage();
        cy.get('.ant-menu-item a').eq(4).click();
        cy.url().should('eq', 'http://localhost:8080/404');
    });
    it("to uncollapse pannel", () => {
        visit404Page();
        cy.get('.anticon-menu-unfold').click();
    });
});

context('Example', () => {
    beforeEach(() => {
        visitExamplePage();
    });

    it('has a open drawer button', () => {
        cy.get(".ant-layout-content")
        .find("button").find("span")
        .should("have.text", "Open drawer example");
    });

    it('opens a drawer', () => {
        cy.get(".ant-layout-content").find("button").click();        
    });
    it('close a drawer', () => {
        cy.get(".ant-layout-content").click();
    });
});

const visitRootPage = () => {
    cy.visit('http://localhost:8080/');
};

const visitDashboardPage = () => {
    cy.visit('http://localhost:8080/dashboard');
};

const visitExamplePage = () => {
    cy.visit('http://localhost:8080/example');
};

const visit404Page = () => {
    cy.visit('http://localhost:8080/404');
};
