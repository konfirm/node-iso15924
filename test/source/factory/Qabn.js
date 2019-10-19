/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabn - Codes reserved for private use', () => {
		const qabn = factory('Qabn');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabn');
			const upper = factory('QABN');
			const lower = factory('qabn');
			const code = factory.code('Qabn');
			const numeric = factory.numeric('939');
			const number = factory.numeric(939);
			const instance = new ISO15924('Qabn', '939');

			expect(singleton).to.shallow.equal(qabn);
			expect(upper).to.shallow.equal(qabn);
			expect(lower).to.shallow.equal(qabn);
			expect(code).to.shallow.equal(qabn);
			expect(numeric).to.shallow.equal(qabn);
			expect(number).to.shallow.equal(qabn);
			expect(instance).not.to.shallow.equal(qabn);
			expect(instance.code).to.equal(qabn.code);
			expect(instance.numeric).to.equal(qabn.numeric);

			next();
		});

		it('has code "Qabn"', (next) => {
			expect(qabn.code).to.equal('Qabn');

			next();
		});

		it('has numeric "939"', (next) => {
			expect(qabn.numeric).to.equal('939');

			next();
		});

		it('implements toString', (next) => {
			expect(qabn.toString).to.be.function();
			expect(qabn.toString()).to.equal('Qabn');
			expect(String(qabn)).to.equal('Qabn');
			expect(0 + qabn).to.equal('0Qabn');
			expect('code:' + qabn).to.equal('code:Qabn');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabn.toJSON).to.be.function();
			expect(qabn.toJSON()).to.equal('Qabn');
			expect(JSON.stringify(qabn)).to.equal('"Qabn"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabn.valueOf).to.be.function();
			expect(qabn.valueOf()).to.equal(939);
			expect(Number(qabn)).to.equal(939);
			expect(+qabn).to.equal(939);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabn.valueOf).to.be.function();
			expect(qabn.valueOf()).to.equal(939);
			expect(Number(qabn)).to.equal(939);
			expect(+qabn).to.equal(939);

			expect(0 + qabn).to.equal('0Qabn');
			expect(String(qabn)).to.equal('Qabn');

			next();
		});
	});
});
