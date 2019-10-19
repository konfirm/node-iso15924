/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Ahom - Ahom, Tai Ahom', () => {
		const ahom = factory('Ahom');

		it('instances are singletons', (next) => {
			const singleton = factory('Ahom');
			const upper = factory('AHOM');
			const lower = factory('ahom');
			const code = factory.code('Ahom');
			const numeric = factory.numeric('338');
			const number = factory.numeric(338);
			const instance = new ISO15924('Ahom', '338');

			expect(singleton).to.shallow.equal(ahom);
			expect(upper).to.shallow.equal(ahom);
			expect(lower).to.shallow.equal(ahom);
			expect(code).to.shallow.equal(ahom);
			expect(numeric).to.shallow.equal(ahom);
			expect(number).to.shallow.equal(ahom);
			expect(instance).not.to.shallow.equal(ahom);
			expect(instance.code).to.equal(ahom.code);
			expect(instance.numeric).to.equal(ahom.numeric);

			next();
		});

		it('has code "Ahom"', (next) => {
			expect(ahom.code).to.equal('Ahom');

			next();
		});

		it('has numeric "338"', (next) => {
			expect(ahom.numeric).to.equal('338');

			next();
		});

		it('implements toString', (next) => {
			expect(ahom.toString).to.be.function();
			expect(ahom.toString()).to.equal('Ahom');
			expect(String(ahom)).to.equal('Ahom');
			expect(0 + ahom).to.equal('0Ahom');
			expect('code:' + ahom).to.equal('code:Ahom');

			next();
		});

		it('implements toJSON', (next) => {
			expect(ahom.toJSON).to.be.function();
			expect(ahom.toJSON()).to.equal('Ahom');
			expect(JSON.stringify(ahom)).to.equal('"Ahom"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(ahom.valueOf).to.be.function();
			expect(ahom.valueOf()).to.equal(338);
			expect(Number(ahom)).to.equal(338);
			expect(+ahom).to.equal(338);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(ahom.valueOf).to.be.function();
			expect(ahom.valueOf()).to.equal(338);
			expect(Number(ahom)).to.equal(338);
			expect(+ahom).to.equal(338);

			expect(0 + ahom).to.equal('0Ahom');
			expect(String(ahom)).to.equal('Ahom');

			next();
		});
	});
});
