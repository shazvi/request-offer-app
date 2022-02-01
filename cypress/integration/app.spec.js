describe("Form validation and submission", () => {
    beforeEach(() => cy.visit("http://localhost:3000"));
    
    it("shows validation errors when empty form is submitted", () => {
        // Check that all 9 required fields are showing error messages
        cy.get("form").submit();
        cy.get(".error-text").should("have.length", 9);
    });
    
    it("successfully submits form and redirects to details page", () => {
        // Populate form
        cy.get("#fullName")
            .should("be.visible")
            .type("John");
        
        cy.get("#email")
            .should("be.visible")
            .type("John@doe.com");
        
        cy.get("#company")
            .should("be.visible")
            .type("Coca cola");
        
        cy.get("#companyAddress")
            .should("be.visible")
            .type("10, Cola st");
        
        cy.get("#city")
            .should("be.visible")
            .type("Los angeles");
        
        cy.get("#state")
            .should("be.visible")
            .type("CA");
        
        cy.get("#country")
            .should("be.visible")
            .type("Sr Lank");
        
        cy.get("#zipCode")
            .should("be.visible")
            .type("12345");
        
        cy.get("#timeline")
            .should("be.visible")
            .select("1");

        // Submit
        cy.get("form").submit();
        
        // Check that redirect worked and details page has rendered
        cy.url().should("include", "/request");
        cy.get("h1").contains("Request Details");
    });
});
