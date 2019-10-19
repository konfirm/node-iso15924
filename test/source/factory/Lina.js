/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Lina - Linear A', () => {
		const lina = factory('Lina');

		it('instances are singletons', (next) => {
			const singleton = factory('Lina');
			const upper = factory('LINA');
			const lower = factory('lina');
			const code = factory.code('Lina');
			const numeric = factory.numeric('400');
			const number = factory.numeric(400);
			const instance = new ISO15924('Lina', '400');

			expect(singleton).to.shallow.equal(lina);
			expect(upper).to.shallow.equal(lina);
			expect(lower).to.shallow.equal(lina);
			expect(code).to.shallow.equal(lina);
			expect(numeric).to.shallow.equal(lina);
			expect(number).to.shallow.equal(lina);
			expect(instance).not.to.shallow.equal(lina);
			expect(instance.code).to.equal(lina.code);
			expect(instance.numeric).to.equal(lina.numeric);

			next();
		});

		it('has code "Lina"', (next) => {
			expect(lina.code).to.equal('Lina');

			next();
		});

		it('has numeric "400"', (next) => {
			expect(lina.numeric).to.equal('400');

			next();
		});

		it('implements toString', (next) => {
			expect(lina.toString).to.be.function();
			expect(lina.toString()).to.equal('Lina');
			expect(String(lina)).to.equal('Lina');
			expect(0 + lina).to.equal('0Lina');
			expect('code:' + lina).to.equal('code:Lina');

			next();
		});

		it('implements toJSON', (next) => {
			expect(lina.toJSON).to.be.function();
			expect(lina.toJSON()).to.equal('Lina');
			expect(JSON.stringify(lina)).to.equal('"Lina"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(lina.valueOf).to.be.function();
			expect(lina.valueOf()).to.equal(400);
			expect(Number(lina)).to.equal(400);
			expect(+lina).to.equal(400);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(lina.valueOf).to.be.function();
			expect(lina.valueOf()).to.equal(400);
			expect(Number(lina)).to.equal(400);
			expect(+lina).to.equal(400);

			expect(0 + lina).to.equal('0Lina');
			expect(String(lina)).to.equal('Lina');

			next();
		});
	});
});
