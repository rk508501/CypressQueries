it("Read text file logins", ()=>{
    cy.task('readTextFile', 'Logins.txt').then((text) => {
        text = text.replace(/\r?\n|\r/g, ' ');

        let splitText = text.split(' ');
        cy.log(JSON.stringify(splitText));

        let arrayWithoutBlanks = splitText.filter(element => element !== '');
        cy.log(JSON.stringify(arrayWithoutBlanks));

        let rows = []
        for (let i = 0; i < arrayWithoutBlanks.length; i= i + 2) {
            rows.push({
                username: arrayWithoutBlanks[i],
                password: arrayWithoutBlanks[i + 1]
            });
        }
        
        cy.log(JSON.stringify(rows));
        rows.shift()

        rows.forEach(row => {
            cy.log("Username: " + row.username + " Password: " + row.password);

            cy.login(row.username, row.password).then(result =>{
                cy.log("Login result: " + result);
            })

            cy.logout().then(result =>{
                cy.log("Logout result: " + result);
            })
        });

    });
})

// function login(username, password){
//     return cy.then(()=>{
//         return "Success"
//     })
// }