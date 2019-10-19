/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaau - Codes reserved for private use', () => {
		const qaau = factory('Qaau');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaau');
			const upper = factory('QAAU');
			const lower = factory('qaau');
			const code = factory.code('Qaau');
			const numeric = factory.numeric('920');
			const number = factory.numeric(920);
			const instance = new ISO15924('Qaau', '920');

			expect(singleton).to.shallow.equal(qaau);
			expect(upper).to.shallow.equal(qaau);
			expect(lower).to.shallow.equal(qaau);
			expect(code).to.shallow.equal(qaau);
			expect(numeric).to.shallow.equal(qaau);
			expect(number).to.shallow.equal(qaau);
			expect(instance).not.to.shallow.equal(qaau);
			expect(instance.code).to.equal(qaau.code);
			expect(instance.numeric).to.equal(qaau.numeric);

			next();
		});

		it('has code "Qaau"', (next) => {
			expect(qaau.code).to.equal('Qaau');

			next();
		});

		it('has numeric "920"', (next) => {
			expect(qaau.numeric).to.equal('920');

			next();
		});

		it('implements toString', (next) => {
			expect(qaau.toString).to.be.function();
			expect(qaau.toString()).to.equal('Qaau');
			expect(String(qaau)).to.equal('Qaau');
			expect(0 + qaau).to.equal('0Qaau');
			expect('code:' + qaau).to.equal('code:Qaau');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaau.toJSON).to.be.function();
			expect(qaau.toJSON()).to.equal('Qaau');
			expect(JSON.stringify(qaau)).to.equal('"Qaau"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaau.valueOf).to.be.function();
			expect(qaau.valueOf()).to.equal(920);
			expect(Number(qaau)).to.equal(920);
			expect(+qaau).to.equal(920);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaau.valueOf).to.be.function();
			expect(qaau.valueOf()).to.equal(920);
			expect(Number(qaau)).to.equal(920);
			expect(+qaau).to.equal(920);

			expect(0 + qaau).to.equal('0Qaau');
			expect(String(qaau)).to.equal('Qaau');

			next();
		});
	});
});
