/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Deva - Devanagari (Nagari)', () => {
		const deva = factory('Deva');

		it('instances are singletons', (next) => {
			const singleton = factory('Deva');
			const upper = factory('DEVA');
			const lower = factory('deva');
			const code = factory.code('Deva');
			const numeric = factory.numeric('315');
			const number = factory.numeric(315);
			const instance = new ISO15924('Deva', '315');

			expect(singleton).to.shallow.equal(deva);
			expect(upper).to.shallow.equal(deva);
			expect(lower).to.shallow.equal(deva);
			expect(code).to.shallow.equal(deva);
			expect(numeric).to.shallow.equal(deva);
			expect(number).to.shallow.equal(deva);
			expect(instance).not.to.shallow.equal(deva);
			expect(instance.code).to.equal(deva.code);
			expect(instance.numeric).to.equal(deva.numeric);

			next();
		});

		it('has code "Deva"', (next) => {
			expect(deva.code).to.equal('Deva');

			next();
		});

		it('has numeric "315"', (next) => {
			expect(deva.numeric).to.equal('315');

			next();
		});

		it('implements toString', (next) => {
			expect(deva.toString).to.be.function();
			expect(deva.toString()).to.equal('Deva');
			expect(String(deva)).to.equal('Deva');
			expect(0 + deva).to.equal('0Deva');
			expect('code:' + deva).to.equal('code:Deva');

			next();
		});

		it('implements toJSON', (next) => {
			expect(deva.toJSON).to.be.function();
			expect(deva.toJSON()).to.equal('Deva');
			expect(JSON.stringify(deva)).to.equal('"Deva"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(deva.valueOf).to.be.function();
			expect(deva.valueOf()).to.equal(315);
			expect(Number(deva)).to.equal(315);
			expect(+deva).to.equal(315);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(deva.valueOf).to.be.function();
			expect(deva.valueOf()).to.equal(315);
			expect(Number(deva)).to.equal(315);
			expect(+deva).to.equal(315);

			expect(0 + deva).to.equal('0Deva');
			expect(String(deva)).to.equal('Deva');

			next();
		});
	});
});
