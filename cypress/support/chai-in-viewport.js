function isInViewport(element, document) {
	const clientRect = element.getBoundingClientRect();

	if (clientRect.right <= 0 || clientRect.bottom <= 0) {
		return false;
	}

	const documentElement = document.documentElement;
	const viewportWidth = documentElement.clientWidth;
	const viewportHeight = documentElement.clientHeight;

	if (clientRect.left >= viewportWidth || clientRect.top >= viewportHeight) {
		return false;
	}

	return true;
}

module.exports = function (chai, utils) {
	const Assertion = chai.Assertion;

	function assertInViewport() {
		const element = this._obj.length ? this._obj[0] : this._obj;

		new Assertion(element).has.property('ownerDocument');
		const document = element.ownerDocument;
	
		new Assertion(document).has.property('defaultView');		
		const window = document.defaultView;
	
		new Assertion(element).is.instanceof(window.HTMLElement);

		return this.assert(
			isInViewport(element, document),
			'expected #{act} to be within viewport',
			'expected #{act} to be outside viewport'
		);
	}

	utils.addProperty(Assertion.prototype, 'inViewport', assertInViewport);
}
