describe("complete the login page", () => {
    beforeEach(()=>{
        cy.visit("localhost:3000/login")
    })
    it("complets corectly", () => {
        cy.wait(500)
        cy.get("#username").type("mimi")
        cy.wait(500)
        cy.get("#password").type("12345")
        cy.wait(500)
        cy.get("#button").click()
    })
})