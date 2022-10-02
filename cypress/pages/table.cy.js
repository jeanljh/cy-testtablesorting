
class Table {
    get table() { return cy.get('table#example') }
    get tableHeaders() { return this.table.find('thead > tr > th') }
    get thName() { return this.tableHeaders.eq(0) }
    get thPosition() { return this.tableHeaders.eq(1) }
    get thOffice() { return this.tableHeaders.eq(2) }
    get thAge() { return this.tableHeaders.eq(3) }
    get thStartDate() { return this.tableHeaders.eq(4) }
    get thSalary() { return this.tableHeaders.eq(5) }
    get tableRows() { return this.table.find('tbody > tr') }
}

export default new Table()