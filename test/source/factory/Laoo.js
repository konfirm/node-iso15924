/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Laoo - Lao', () => {
		const laoo = factory('Laoo');

		it('instances are singletons', (next) => {
			const singleton = factory('Laoo');
			const upper = factory('LAOO');
			const lower = factory('laoo');
			const code = factory.code('Laoo');
			const numeric = factory.numeric('356');
			const number = factory.numeric(356);
			const instance = new ISO15924('Laoo', '356');

			expect(singleton).to.shallow.equal(laoo);
			expect(upper).to.shallow.equal(laoo);
			expect(lower).to.shallow.equal(laoo);
			expect(code).to.shallow.equal(laoo);
			expect(numeric).to.shallow.equal(laoo);
			expect(number).to.shallow.equal(laoo);
			expect(instance).not.to.shallow.equal(laoo);
			expect(instance.code).to.equal(laoo.code);
			expect(instance.numeric).to.equal(laoo.numeric);

			next();
		});

		it('has code "Laoo"', (next) => {
			expect(laoo.code).to.equal('Laoo');

			next();
		});

		it('has numeric "356"', (next) => {
			expect(laoo.numeric).to.equal('356');

			next();
		});

		it('implements toString', (next) => {
			expect(laoo.toString).to.be.function();
			expect(laoo.toString()).to.equal('Laoo');
			expect(String(laoo)).to.equal('Laoo');
			expect(0 + laoo).to.equal('0Laoo');
			expect('code:' + laoo).to.equal('code:Laoo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(laoo.toJSON).to.be.function();
			expect(laoo.toJSON()).to.equal('Laoo');
			expect(JSON.stringify(laoo)).to.equal('"Laoo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(laoo.valueOf).to.be.function();
			expect(laoo.valueOf()).to.equal(356);
			expect(Number(laoo)).to.equal(356);
			expect(+laoo).to.equal(356);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(laoo.valueOf).to.be.function();
			expect(laoo.valueOf()).to.equal(356);
			expect(Number(laoo)).to.equal(356);
			expect(+laoo).to.equal(356);

			expect(0 + laoo).to.equal('0Laoo');
			expect(String(laoo)).to.equal('Laoo');

			next();
		});
	});
});
