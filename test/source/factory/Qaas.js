/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaas - Codes reserved for private use', () => {
		const qaas = factory('Qaas');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaas');
			const upper = factory('QAAS');
			const lower = factory('qaas');
			const code = factory.code('Qaas');
			const numeric = factory.numeric('918');
			const number = factory.numeric(918);
			const instance = new ISO15924('Qaas', '918');

			expect(singleton).to.shallow.equal(qaas);
			expect(upper).to.shallow.equal(qaas);
			expect(lower).to.shallow.equal(qaas);
			expect(code).to.shallow.equal(qaas);
			expect(numeric).to.shallow.equal(qaas);
			expect(number).to.shallow.equal(qaas);
			expect(instance).not.to.shallow.equal(qaas);
			expect(instance.code).to.equal(qaas.code);
			expect(instance.numeric).to.equal(qaas.numeric);

			next();
		});

		it('has code "Qaas"', (next) => {
			expect(qaas.code).to.equal('Qaas');

			next();
		});

		it('has numeric "918"', (next) => {
			expect(qaas.numeric).to.equal('918');

			next();
		});

		it('implements toString', (next) => {
			expect(qaas.toString).to.be.function();
			expect(qaas.toString()).to.equal('Qaas');
			expect(String(qaas)).to.equal('Qaas');
			expect(0 + qaas).to.equal('0Qaas');
			expect('code:' + qaas).to.equal('code:Qaas');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaas.toJSON).to.be.function();
			expect(qaas.toJSON()).to.equal('Qaas');
			expect(JSON.stringify(qaas)).to.equal('"Qaas"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaas.valueOf).to.be.function();
			expect(qaas.valueOf()).to.equal(918);
			expect(Number(qaas)).to.equal(918);
			expect(+qaas).to.equal(918);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaas.valueOf).to.be.function();
			expect(qaas.valueOf()).to.equal(918);
			expect(Number(qaas)).to.equal(918);
			expect(+qaas).to.equal(918);

			expect(0 + qaas).to.equal('0Qaas');
			expect(String(qaas)).to.equal('Qaas');

			next();
		});
	});
});
