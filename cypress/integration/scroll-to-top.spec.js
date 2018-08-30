context('scroll-to-top button', () => {
	beforeEach(() => {
	  cy.visit('./z80.html');
	});

	it('exists', () => {
		cy.get('.scroll-to-top');
	});

	context('when clicked', () => {
		beforeEach(() => {
			cy.scrollTo('bottom');
			cy.get('.scroll-to-top').click();
		});

		it('scrolls to top of page', () => {
			cy.window().then($window => {
				expect($window.scrollY).to.equal(0);

			});
		});

		it('makes title visible in viewport', () => {
			cy.get('h1').should('be.inViewport');
		});

		it('makes footer not visible in viewport', () => {
			cy.get('title').should('not.be.inViewport');
		});
	});
});
