/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaag - Codes reserved for private use', () => {
		const qaag = factory('Qaag');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaag');
			const upper = factory('QAAG');
			const lower = factory('qaag');
			const code = factory.code('Qaag');
			const numeric = factory.numeric('906');
			const number = factory.numeric(906);
			const instance = new ISO15924('Qaag', '906');

			expect(singleton).to.shallow.equal(qaag);
			expect(upper).to.shallow.equal(qaag);
			expect(lower).to.shallow.equal(qaag);
			expect(code).to.shallow.equal(qaag);
			expect(numeric).to.shallow.equal(qaag);
			expect(number).to.shallow.equal(qaag);
			expect(instance).not.to.shallow.equal(qaag);
			expect(instance.code).to.equal(qaag.code);
			expect(instance.numeric).to.equal(qaag.numeric);

			next();
		});

		it('has code "Qaag"', (next) => {
			expect(qaag.code).to.equal('Qaag');

			next();
		});

		it('has numeric "906"', (next) => {
			expect(qaag.numeric).to.equal('906');

			next();
		});

		it('implements toString', (next) => {
			expect(qaag.toString).to.be.function();
			expect(qaag.toString()).to.equal('Qaag');
			expect(String(qaag)).to.equal('Qaag');
			expect(0 + qaag).to.equal('0Qaag');
			expect('code:' + qaag).to.equal('code:Qaag');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaag.toJSON).to.be.function();
			expect(qaag.toJSON()).to.equal('Qaag');
			expect(JSON.stringify(qaag)).to.equal('"Qaag"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaag.valueOf).to.be.function();
			expect(qaag.valueOf()).to.equal(906);
			expect(Number(qaag)).to.equal(906);
			expect(+qaag).to.equal(906);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaag.valueOf).to.be.function();
			expect(qaag.valueOf()).to.equal(906);
			expect(Number(qaag)).to.equal(906);
			expect(+qaag).to.equal(906);

			expect(0 + qaag).to.equal('0Qaag');
			expect(String(qaag)).to.equal('Qaag');

			next();
		});
	});
});
