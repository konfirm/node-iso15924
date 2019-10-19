/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Nkoo - N’Ko', () => {
		const nkoo = factory('Nkoo');

		it('instances are singletons', (next) => {
			const singleton = factory('Nkoo');
			const upper = factory('NKOO');
			const lower = factory('nkoo');
			const code = factory.code('Nkoo');
			const numeric = factory.numeric('165');
			const number = factory.numeric(165);
			const instance = new ISO15924('Nkoo', '165');

			expect(singleton).to.shallow.equal(nkoo);
			expect(upper).to.shallow.equal(nkoo);
			expect(lower).to.shallow.equal(nkoo);
			expect(code).to.shallow.equal(nkoo);
			expect(numeric).to.shallow.equal(nkoo);
			expect(number).to.shallow.equal(nkoo);
			expect(instance).not.to.shallow.equal(nkoo);
			expect(instance.code).to.equal(nkoo.code);
			expect(instance.numeric).to.equal(nkoo.numeric);

			next();
		});

		it('has code "Nkoo"', (next) => {
			expect(nkoo.code).to.equal('Nkoo');

			next();
		});

		it('has numeric "165"', (next) => {
			expect(nkoo.numeric).to.equal('165');

			next();
		});

		it('implements toString', (next) => {
			expect(nkoo.toString).to.be.function();
			expect(nkoo.toString()).to.equal('Nkoo');
			expect(String(nkoo)).to.equal('Nkoo');
			expect(0 + nkoo).to.equal('0Nkoo');
			expect('code:' + nkoo).to.equal('code:Nkoo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(nkoo.toJSON).to.be.function();
			expect(nkoo.toJSON()).to.equal('Nkoo');
			expect(JSON.stringify(nkoo)).to.equal('"Nkoo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(nkoo.valueOf).to.be.function();
			expect(nkoo.valueOf()).to.equal(165);
			expect(Number(nkoo)).to.equal(165);
			expect(+nkoo).to.equal(165);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(nkoo.valueOf).to.be.function();
			expect(nkoo.valueOf()).to.equal(165);
			expect(Number(nkoo)).to.equal(165);
			expect(+nkoo).to.equal(165);

			expect(0 + nkoo).to.equal('0Nkoo');
			expect(String(nkoo)).to.equal('Nkoo');

			next();
		});
	});
});
