/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mero - Meroitic Hieroglyphs', () => {
		const mero = factory('Mero');

		it('instances are singletons', (next) => {
			const singleton = factory('Mero');
			const upper = factory('MERO');
			const lower = factory('mero');
			const code = factory.code('Mero');
			const numeric = factory.numeric('100');
			const number = factory.numeric(100);
			const instance = new ISO15924('Mero', '100');

			expect(singleton).to.shallow.equal(mero);
			expect(upper).to.shallow.equal(mero);
			expect(lower).to.shallow.equal(mero);
			expect(code).to.shallow.equal(mero);
			expect(numeric).to.shallow.equal(mero);
			expect(number).to.shallow.equal(mero);
			expect(instance).not.to.shallow.equal(mero);
			expect(instance.code).to.equal(mero.code);
			expect(instance.numeric).to.equal(mero.numeric);

			next();
		});

		it('has code "Mero"', (next) => {
			expect(mero.code).to.equal('Mero');

			next();
		});

		it('has numeric "100"', (next) => {
			expect(mero.numeric).to.equal('100');

			next();
		});

		it('implements toString', (next) => {
			expect(mero.toString).to.be.function();
			expect(mero.toString()).to.equal('Mero');
			expect(String(mero)).to.equal('Mero');
			expect(0 + mero).to.equal('0Mero');
			expect('code:' + mero).to.equal('code:Mero');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mero.toJSON).to.be.function();
			expect(mero.toJSON()).to.equal('Mero');
			expect(JSON.stringify(mero)).to.equal('"Mero"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mero.valueOf).to.be.function();
			expect(mero.valueOf()).to.equal(100);
			expect(Number(mero)).to.equal(100);
			expect(+mero).to.equal(100);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mero.valueOf).to.be.function();
			expect(mero.valueOf()).to.equal(100);
			expect(Number(mero)).to.equal(100);
			expect(+mero).to.equal(100);

			expect(0 + mero).to.equal('0Mero');
			expect(String(mero)).to.equal('Mero');

			next();
		});
	});
});
