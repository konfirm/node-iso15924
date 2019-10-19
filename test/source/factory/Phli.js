/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Phli - Inscriptional Pahlavi', () => {
		const phli = factory('Phli');

		it('instances are singletons', (next) => {
			const singleton = factory('Phli');
			const upper = factory('PHLI');
			const lower = factory('phli');
			const code = factory.code('Phli');
			const numeric = factory.numeric('131');
			const number = factory.numeric(131);
			const instance = new ISO15924('Phli', '131');

			expect(singleton).to.shallow.equal(phli);
			expect(upper).to.shallow.equal(phli);
			expect(lower).to.shallow.equal(phli);
			expect(code).to.shallow.equal(phli);
			expect(numeric).to.shallow.equal(phli);
			expect(number).to.shallow.equal(phli);
			expect(instance).not.to.shallow.equal(phli);
			expect(instance.code).to.equal(phli.code);
			expect(instance.numeric).to.equal(phli.numeric);

			next();
		});

		it('has code "Phli"', (next) => {
			expect(phli.code).to.equal('Phli');

			next();
		});

		it('has numeric "131"', (next) => {
			expect(phli.numeric).to.equal('131');

			next();
		});

		it('implements toString', (next) => {
			expect(phli.toString).to.be.function();
			expect(phli.toString()).to.equal('Phli');
			expect(String(phli)).to.equal('Phli');
			expect(0 + phli).to.equal('0Phli');
			expect('code:' + phli).to.equal('code:Phli');

			next();
		});

		it('implements toJSON', (next) => {
			expect(phli.toJSON).to.be.function();
			expect(phli.toJSON()).to.equal('Phli');
			expect(JSON.stringify(phli)).to.equal('"Phli"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(phli.valueOf).to.be.function();
			expect(phli.valueOf()).to.equal(131);
			expect(Number(phli)).to.equal(131);
			expect(+phli).to.equal(131);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(phli.valueOf).to.be.function();
			expect(phli.valueOf()).to.equal(131);
			expect(Number(phli)).to.equal(131);
			expect(+phli).to.equal(131);

			expect(0 + phli).to.equal('0Phli');
			expect(String(phli)).to.equal('Phli');

			next();
		});
	});
});
