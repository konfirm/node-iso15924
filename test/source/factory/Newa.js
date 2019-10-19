/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Newa - Newa, Newar, Newari, Nepāla lipi', () => {
		const newa = factory('Newa');

		it('instances are singletons', (next) => {
			const singleton = factory('Newa');
			const upper = factory('NEWA');
			const lower = factory('newa');
			const code = factory.code('Newa');
			const numeric = factory.numeric('333');
			const number = factory.numeric(333);
			const instance = new ISO15924('Newa', '333');

			expect(singleton).to.shallow.equal(newa);
			expect(upper).to.shallow.equal(newa);
			expect(lower).to.shallow.equal(newa);
			expect(code).to.shallow.equal(newa);
			expect(numeric).to.shallow.equal(newa);
			expect(number).to.shallow.equal(newa);
			expect(instance).not.to.shallow.equal(newa);
			expect(instance.code).to.equal(newa.code);
			expect(instance.numeric).to.equal(newa.numeric);

			next();
		});

		it('has code "Newa"', (next) => {
			expect(newa.code).to.equal('Newa');

			next();
		});

		it('has numeric "333"', (next) => {
			expect(newa.numeric).to.equal('333');

			next();
		});

		it('implements toString', (next) => {
			expect(newa.toString).to.be.function();
			expect(newa.toString()).to.equal('Newa');
			expect(String(newa)).to.equal('Newa');
			expect(0 + newa).to.equal('0Newa');
			expect('code:' + newa).to.equal('code:Newa');

			next();
		});

		it('implements toJSON', (next) => {
			expect(newa.toJSON).to.be.function();
			expect(newa.toJSON()).to.equal('Newa');
			expect(JSON.stringify(newa)).to.equal('"Newa"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(newa.valueOf).to.be.function();
			expect(newa.valueOf()).to.equal(333);
			expect(Number(newa)).to.equal(333);
			expect(+newa).to.equal(333);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(newa.valueOf).to.be.function();
			expect(newa.valueOf()).to.equal(333);
			expect(Number(newa)).to.equal(333);
			expect(+newa).to.equal(333);

			expect(0 + newa).to.equal('0Newa');
			expect(String(newa)).to.equal('Newa');

			next();
		});
	});
});
