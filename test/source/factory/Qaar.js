/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaar - Codes reserved for private use', () => {
		const qaar = factory('Qaar');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaar');
			const upper = factory('QAAR');
			const lower = factory('qaar');
			const code = factory.code('Qaar');
			const numeric = factory.numeric('917');
			const number = factory.numeric(917);
			const instance = new ISO15924('Qaar', '917');

			expect(singleton).to.shallow.equal(qaar);
			expect(upper).to.shallow.equal(qaar);
			expect(lower).to.shallow.equal(qaar);
			expect(code).to.shallow.equal(qaar);
			expect(numeric).to.shallow.equal(qaar);
			expect(number).to.shallow.equal(qaar);
			expect(instance).not.to.shallow.equal(qaar);
			expect(instance.code).to.equal(qaar.code);
			expect(instance.numeric).to.equal(qaar.numeric);

			next();
		});

		it('has code "Qaar"', (next) => {
			expect(qaar.code).to.equal('Qaar');

			next();
		});

		it('has numeric "917"', (next) => {
			expect(qaar.numeric).to.equal('917');

			next();
		});

		it('implements toString', (next) => {
			expect(qaar.toString).to.be.function();
			expect(qaar.toString()).to.equal('Qaar');
			expect(String(qaar)).to.equal('Qaar');
			expect(0 + qaar).to.equal('0Qaar');
			expect('code:' + qaar).to.equal('code:Qaar');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaar.toJSON).to.be.function();
			expect(qaar.toJSON()).to.equal('Qaar');
			expect(JSON.stringify(qaar)).to.equal('"Qaar"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaar.valueOf).to.be.function();
			expect(qaar.valueOf()).to.equal(917);
			expect(Number(qaar)).to.equal(917);
			expect(+qaar).to.equal(917);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaar.valueOf).to.be.function();
			expect(qaar.valueOf()).to.equal(917);
			expect(Number(qaar)).to.equal(917);
			expect(+qaar).to.equal(917);

			expect(0 + qaar).to.equal('0Qaar');
			expect(String(qaar)).to.equal('Qaar');

			next();
		});
	});
});
