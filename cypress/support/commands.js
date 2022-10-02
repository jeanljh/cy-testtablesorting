// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='cypress' />
import table from '../pages/table.cy'
const { _ } = Cypress

Cypress.Commands.add('funcTestSorting', (sortValue, sortOrder) => {
    const getHeaderText = $header => _.map($header, 'textContent')
    table.tableHeaders.then(getHeaderText).then(headers => {
        const getTableValues = rows => {
            return _.map(rows, r => {
                return _.chain(r.cells)
                .keyBy(cell => headers[cell.cellIndex])
                .value()
            })
        }
        table.tableRows.then(getTableValues).then(tableValues => {
            expect(tableValues).to.deep.eq(_.orderBy(tableValues, sortValue, sortOrder))
        })
    })
})