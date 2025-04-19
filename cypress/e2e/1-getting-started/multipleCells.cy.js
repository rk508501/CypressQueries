it("Multiple cell click", ()=>{
    cy.visit("http://127.0.0.1:5500/HTML/index.html")
    cy.get("input.form-control").each(cell =>{
        cy.wrap(cell).type("123")
    })
})