declare namespace Cypress {
    interface Chainable<Subject> {
       /**
        * The header name to sort and compare the table column.
        * @param sortValue 
        * The sorting order for the table column
        * @param sortOrder
        * Example of the method usage
        * @example 
        * cy.funcTestSorting('Name.textContent', 'desc')
        */
        funcTestSorting (sortValue:string | string[], sortOrder: string | string[]): Chainable<any>
    }
  }