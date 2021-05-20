import { expect } from 'chai';

describe('google page', () => {
	it('should have the right title', () => {
		browser.url('https://google.com');
		const title = browser.getTitle();
		expect(title).to.be.equal(
			'Google'
		);
	});
});
