/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaay - Codes reserved for private use', () => {
		const qaay = factory('Qaay');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaay');
			const upper = factory('QAAY');
			const lower = factory('qaay');
			const code = factory.code('Qaay');
			const numeric = factory.numeric('924');
			const number = factory.numeric(924);
			const instance = new ISO15924('Qaay', '924');

			expect(singleton).to.shallow.equal(qaay);
			expect(upper).to.shallow.equal(qaay);
			expect(lower).to.shallow.equal(qaay);
			expect(code).to.shallow.equal(qaay);
			expect(numeric).to.shallow.equal(qaay);
			expect(number).to.shallow.equal(qaay);
			expect(instance).not.to.shallow.equal(qaay);
			expect(instance.code).to.equal(qaay.code);
			expect(instance.numeric).to.equal(qaay.numeric);

			next();
		});

		it('has code "Qaay"', (next) => {
			expect(qaay.code).to.equal('Qaay');

			next();
		});

		it('has numeric "924"', (next) => {
			expect(qaay.numeric).to.equal('924');

			next();
		});

		it('implements toString', (next) => {
			expect(qaay.toString).to.be.function();
			expect(qaay.toString()).to.equal('Qaay');
			expect(String(qaay)).to.equal('Qaay');
			expect(0 + qaay).to.equal('0Qaay');
			expect('code:' + qaay).to.equal('code:Qaay');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaay.toJSON).to.be.function();
			expect(qaay.toJSON()).to.equal('Qaay');
			expect(JSON.stringify(qaay)).to.equal('"Qaay"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaay.valueOf).to.be.function();
			expect(qaay.valueOf()).to.equal(924);
			expect(Number(qaay)).to.equal(924);
			expect(+qaay).to.equal(924);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaay.valueOf).to.be.function();
			expect(qaay.valueOf()).to.equal(924);
			expect(Number(qaay)).to.equal(924);
			expect(+qaay).to.equal(924);

			expect(0 + qaay).to.equal('0Qaay');
			expect(String(qaay)).to.equal('Qaay');

			next();
		});
	});
});
