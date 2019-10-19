/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Nand - Nandinagari', () => {
		const nand = factory('Nand');

		it('instances are singletons', (next) => {
			const singleton = factory('Nand');
			const upper = factory('NAND');
			const lower = factory('nand');
			const code = factory.code('Nand');
			const numeric = factory.numeric('311');
			const number = factory.numeric(311);
			const instance = new ISO15924('Nand', '311');

			expect(singleton).to.shallow.equal(nand);
			expect(upper).to.shallow.equal(nand);
			expect(lower).to.shallow.equal(nand);
			expect(code).to.shallow.equal(nand);
			expect(numeric).to.shallow.equal(nand);
			expect(number).to.shallow.equal(nand);
			expect(instance).not.to.shallow.equal(nand);
			expect(instance.code).to.equal(nand.code);
			expect(instance.numeric).to.equal(nand.numeric);

			next();
		});

		it('has code "Nand"', (next) => {
			expect(nand.code).to.equal('Nand');

			next();
		});

		it('has numeric "311"', (next) => {
			expect(nand.numeric).to.equal('311');

			next();
		});

		it('implements toString', (next) => {
			expect(nand.toString).to.be.function();
			expect(nand.toString()).to.equal('Nand');
			expect(String(nand)).to.equal('Nand');
			expect(0 + nand).to.equal('0Nand');
			expect('code:' + nand).to.equal('code:Nand');

			next();
		});

		it('implements toJSON', (next) => {
			expect(nand.toJSON).to.be.function();
			expect(nand.toJSON()).to.equal('Nand');
			expect(JSON.stringify(nand)).to.equal('"Nand"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(nand.valueOf).to.be.function();
			expect(nand.valueOf()).to.equal(311);
			expect(Number(nand)).to.equal(311);
			expect(+nand).to.equal(311);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(nand.valueOf).to.be.function();
			expect(nand.valueOf()).to.equal(311);
			expect(Number(nand)).to.equal(311);
			expect(+nand).to.equal(311);

			expect(0 + nand).to.equal('0Nand');
			expect(String(nand)).to.equal('Nand');

			next();
		});
	});
});
