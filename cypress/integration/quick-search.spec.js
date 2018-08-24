context('quick-search', () => {
	beforeEach(() => {
	  cy.visit('./z80.html');
	});

	context('initially', () => {
		assertQuickSearchIsClosed();
	});

	context('when open-quick-search button is clicked', () => {
		beforeEach(() => {
			cy.get('.search-button').click();
		});

		assertQuickSearchIsOpened();
	});

	context('when space is pressed', () => {
		beforeEach(() => {
			cy.document().trigger('keypress', { key: ' ' });
		});

		assertQuickSearchIsOpened();
	});

	context('when enter is pressed', () => {
		beforeEach(() => {
			cy.document().trigger('keypress', { key: 'Enter' });
		});

		assertQuickSearchIsOpened();
	});
});

function assertQuickSearchIsOpened() {
	context('quick search is opened', () => {
		it('hides open-quick-search button', () => {
			cy.get('.search-button').should('not.be.visible');
		});
	
		it('shows quick-search input', () => {
			cy.get('#quick-search').should('be.visible');
		});
	
		it('shows close-quick-search button', () => {
			cy.get('.close-button').should('be.visible');
		});
	
		it('sets focus to quick-search input', () => {
			cy.focused().should('have.id', 'quick-search');
		});
	});
}

function assertQuickSearchIsClosed() {
	context('quick search is closed', () => {
		it('shows open-quick-search button', () => {
			cy.get('.search-button').should('be.visible');
		});
	
		it('hides quick-search input', () => {
			cy.get('#quick-search').should('not.be.visible');
		});
	
		it('hides close-quick-search button', () => {
			cy.get('.close-button').should('not.be.visible');
		});
	
		it('focus is not on quick-search input', () => {
			cy.focused().should('not.have.id', 'quick-search');
		});
	});
}
