context('Z80.html page', () => {
	beforeEach(() => {
	  cy.visit('./z80.html');
	});

	it('has a title', () => {
		cy.get('h1#title').should('exist');
	});

	it('has some instruction shortcuts', () => {
		cy.get('.shortcuts li').should('exist');
	});

	it('has some instruction tables', () => {
		cy.get('.instruction-table').should('exist');
	});

	it('has an instruction table for each shortcut', () => {
		cy.get('.shortcuts li').then($shortcuts => {
			cy.get('.instruction-table').then($tables => {
				expect($tables.length).to.be.greaterThan(50)
				expect($tables.length).to.equal($shortcuts.length);
			});
		});
	});

	it('has a footer', () => {
		cy.get('footer')
	});
});
