/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hano - Hanunoo (Hanunóo)', () => {
		const hano = factory('Hano');

		it('instances are singletons', (next) => {
			const singleton = factory('Hano');
			const upper = factory('HANO');
			const lower = factory('hano');
			const code = factory.code('Hano');
			const numeric = factory.numeric('371');
			const number = factory.numeric(371);
			const instance = new ISO15924('Hano', '371');

			expect(singleton).to.shallow.equal(hano);
			expect(upper).to.shallow.equal(hano);
			expect(lower).to.shallow.equal(hano);
			expect(code).to.shallow.equal(hano);
			expect(numeric).to.shallow.equal(hano);
			expect(number).to.shallow.equal(hano);
			expect(instance).not.to.shallow.equal(hano);
			expect(instance.code).to.equal(hano.code);
			expect(instance.numeric).to.equal(hano.numeric);

			next();
		});

		it('has code "Hano"', (next) => {
			expect(hano.code).to.equal('Hano');

			next();
		});

		it('has numeric "371"', (next) => {
			expect(hano.numeric).to.equal('371');

			next();
		});

		it('implements toString', (next) => {
			expect(hano.toString).to.be.function();
			expect(hano.toString()).to.equal('Hano');
			expect(String(hano)).to.equal('Hano');
			expect(0 + hano).to.equal('0Hano');
			expect('code:' + hano).to.equal('code:Hano');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hano.toJSON).to.be.function();
			expect(hano.toJSON()).to.equal('Hano');
			expect(JSON.stringify(hano)).to.equal('"Hano"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hano.valueOf).to.be.function();
			expect(hano.valueOf()).to.equal(371);
			expect(Number(hano)).to.equal(371);
			expect(+hano).to.equal(371);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hano.valueOf).to.be.function();
			expect(hano.valueOf()).to.equal(371);
			expect(Number(hano)).to.equal(371);
			expect(+hano).to.equal(371);

			expect(0 + hano).to.equal('0Hano');
			expect(String(hano)).to.equal('Hano');

			next();
		});
	});
});
