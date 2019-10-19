/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mroo - Mro, Mru', () => {
		const mroo = factory('Mroo');

		it('instances are singletons', (next) => {
			const singleton = factory('Mroo');
			const upper = factory('MROO');
			const lower = factory('mroo');
			const code = factory.code('Mroo');
			const numeric = factory.numeric('264');
			const number = factory.numeric(264);
			const instance = new ISO15924('Mroo', '264');

			expect(singleton).to.shallow.equal(mroo);
			expect(upper).to.shallow.equal(mroo);
			expect(lower).to.shallow.equal(mroo);
			expect(code).to.shallow.equal(mroo);
			expect(numeric).to.shallow.equal(mroo);
			expect(number).to.shallow.equal(mroo);
			expect(instance).not.to.shallow.equal(mroo);
			expect(instance.code).to.equal(mroo.code);
			expect(instance.numeric).to.equal(mroo.numeric);

			next();
		});

		it('has code "Mroo"', (next) => {
			expect(mroo.code).to.equal('Mroo');

			next();
		});

		it('has numeric "264"', (next) => {
			expect(mroo.numeric).to.equal('264');

			next();
		});

		it('implements toString', (next) => {
			expect(mroo.toString).to.be.function();
			expect(mroo.toString()).to.equal('Mroo');
			expect(String(mroo)).to.equal('Mroo');
			expect(0 + mroo).to.equal('0Mroo');
			expect('code:' + mroo).to.equal('code:Mroo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mroo.toJSON).to.be.function();
			expect(mroo.toJSON()).to.equal('Mroo');
			expect(JSON.stringify(mroo)).to.equal('"Mroo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mroo.valueOf).to.be.function();
			expect(mroo.valueOf()).to.equal(264);
			expect(Number(mroo)).to.equal(264);
			expect(+mroo).to.equal(264);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mroo.valueOf).to.be.function();
			expect(mroo.valueOf()).to.equal(264);
			expect(Number(mroo)).to.equal(264);
			expect(+mroo).to.equal(264);

			expect(0 + mroo).to.equal('0Mroo');
			expect(String(mroo)).to.equal('Mroo');

			next();
		});
	});
});
