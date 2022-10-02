/// <reference types='cypress'/>

import table from '../pages/table.cy'

describe('Test Suite - Table Sorting', () => {
    beforeEach(() => {
        cy.visit('table_sorting.html')
    })
    it('Test Sort by Name', () => {
        /**sort by Name column in ascending order */
        table.thName.click()
        cy.funcTestSorting('Name.textContent')
        /**sort by Name column in descending order */
        table.thName.click()
        cy.funcTestSorting('Name.textContent', 'desc')
    })
    it('Test Sort by Position', () => {
        /**sort by Position column in ascending order */
        table.thPosition.click()
        cy.funcTestSorting('Position.textContent')
        /**sort by Position column in descending order */
        table.thPosition.click()
        cy.funcTestSorting('Position.textContent', 'desc')
    })
    it('Test Sort by Office', () => {
        /**sort by Office column in ascending order */
        table.thOffice.click()
        cy.funcTestSorting('Office.textContent')
        /**sort by Office column in descending order */
        table.thOffice.click()
        cy.funcTestSorting('Office.textContent', 'desc')
    })
    it('Test Sort by Age', () => {
        /**sort by Age column in ascending order */
        table.thAge.click()
        cy.funcTestSorting('Number(Age.textContent)')
        /**sort by Age column in descending order */
        table.thAge.click()
        cy.funcTestSorting('Number(Age.textContent)', 'desc')
    })
    it('Test Sort by Start date', () => {
        /**sort by Start date column in ascending order */
        table.thStartDate.click()
        cy.funcTestSorting('new Date([Start date].textContent)')
        /**sort by Start date column in descendng order */
        table.thStartDate.click()
        cy.funcTestSorting('new Date([Start date].textContent)', 'desc')
    })
    it('Test Sort by Salary', () => {
        /**sort by Salary column in ascending order */
        table.thStartDate.click()
        cy.funcTestSorting('Number(Salary.textContent.slice(1).replace(",",""))')
        /**sort by Salary column in descending order */
        table.thStartDate.click()
        cy.funcTestSorting('Number(Salary.textContent.slice(1).replaceAll(",",""))', 'desc')
    })
})