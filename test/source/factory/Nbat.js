/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Nbat - Nabataean', () => {
		const nbat = factory('Nbat');

		it('instances are singletons', (next) => {
			const singleton = factory('Nbat');
			const upper = factory('NBAT');
			const lower = factory('nbat');
			const code = factory.code('Nbat');
			const numeric = factory.numeric('159');
			const number = factory.numeric(159);
			const instance = new ISO15924('Nbat', '159');

			expect(singleton).to.shallow.equal(nbat);
			expect(upper).to.shallow.equal(nbat);
			expect(lower).to.shallow.equal(nbat);
			expect(code).to.shallow.equal(nbat);
			expect(numeric).to.shallow.equal(nbat);
			expect(number).to.shallow.equal(nbat);
			expect(instance).not.to.shallow.equal(nbat);
			expect(instance.code).to.equal(nbat.code);
			expect(instance.numeric).to.equal(nbat.numeric);

			next();
		});

		it('has code "Nbat"', (next) => {
			expect(nbat.code).to.equal('Nbat');

			next();
		});

		it('has numeric "159"', (next) => {
			expect(nbat.numeric).to.equal('159');

			next();
		});

		it('implements toString', (next) => {
			expect(nbat.toString).to.be.function();
			expect(nbat.toString()).to.equal('Nbat');
			expect(String(nbat)).to.equal('Nbat');
			expect(0 + nbat).to.equal('0Nbat');
			expect('code:' + nbat).to.equal('code:Nbat');

			next();
		});

		it('implements toJSON', (next) => {
			expect(nbat.toJSON).to.be.function();
			expect(nbat.toJSON()).to.equal('Nbat');
			expect(JSON.stringify(nbat)).to.equal('"Nbat"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(nbat.valueOf).to.be.function();
			expect(nbat.valueOf()).to.equal(159);
			expect(Number(nbat)).to.equal(159);
			expect(+nbat).to.equal(159);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(nbat.valueOf).to.be.function();
			expect(nbat.valueOf()).to.equal(159);
			expect(Number(nbat)).to.equal(159);
			expect(+nbat).to.equal(159);

			expect(0 + nbat).to.equal('0Nbat');
			expect(String(nbat)).to.equal('Nbat');

			next();
		});
	});
});
