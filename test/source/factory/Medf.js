/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Medf - Medefaidrin (Oberi Okaime, Oberi Ɔkaimɛ)', () => {
		const medf = factory('Medf');

		it('instances are singletons', (next) => {
			const singleton = factory('Medf');
			const upper = factory('MEDF');
			const lower = factory('medf');
			const code = factory.code('Medf');
			const numeric = factory.numeric('265');
			const number = factory.numeric(265);
			const instance = new ISO15924('Medf', '265');

			expect(singleton).to.shallow.equal(medf);
			expect(upper).to.shallow.equal(medf);
			expect(lower).to.shallow.equal(medf);
			expect(code).to.shallow.equal(medf);
			expect(numeric).to.shallow.equal(medf);
			expect(number).to.shallow.equal(medf);
			expect(instance).not.to.shallow.equal(medf);
			expect(instance.code).to.equal(medf.code);
			expect(instance.numeric).to.equal(medf.numeric);

			next();
		});

		it('has code "Medf"', (next) => {
			expect(medf.code).to.equal('Medf');

			next();
		});

		it('has numeric "265"', (next) => {
			expect(medf.numeric).to.equal('265');

			next();
		});

		it('implements toString', (next) => {
			expect(medf.toString).to.be.function();
			expect(medf.toString()).to.equal('Medf');
			expect(String(medf)).to.equal('Medf');
			expect(0 + medf).to.equal('0Medf');
			expect('code:' + medf).to.equal('code:Medf');

			next();
		});

		it('implements toJSON', (next) => {
			expect(medf.toJSON).to.be.function();
			expect(medf.toJSON()).to.equal('Medf');
			expect(JSON.stringify(medf)).to.equal('"Medf"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(medf.valueOf).to.be.function();
			expect(medf.valueOf()).to.equal(265);
			expect(Number(medf)).to.equal(265);
			expect(+medf).to.equal(265);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(medf.valueOf).to.be.function();
			expect(medf.valueOf()).to.equal(265);
			expect(Number(medf)).to.equal(265);
			expect(+medf).to.equal(265);

			expect(0 + medf).to.equal('0Medf');
			expect(String(medf)).to.equal('Medf');

			next();
		});
	});
});
