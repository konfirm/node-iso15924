/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zzzz - Code for uncoded script', () => {
		const zzzz = factory('Zzzz');

		it('instances are singletons', (next) => {
			const singleton = factory('Zzzz');
			const upper = factory('ZZZZ');
			const lower = factory('zzzz');
			const code = factory.code('Zzzz');
			const numeric = factory.numeric('999');
			const number = factory.numeric(999);
			const instance = new ISO15924('Zzzz', '999');

			expect(singleton).to.shallow.equal(zzzz);
			expect(upper).to.shallow.equal(zzzz);
			expect(lower).to.shallow.equal(zzzz);
			expect(code).to.shallow.equal(zzzz);
			expect(numeric).to.shallow.equal(zzzz);
			expect(number).to.shallow.equal(zzzz);
			expect(instance).not.to.shallow.equal(zzzz);
			expect(instance.code).to.equal(zzzz.code);
			expect(instance.numeric).to.equal(zzzz.numeric);

			next();
		});

		it('has code "Zzzz"', (next) => {
			expect(zzzz.code).to.equal('Zzzz');

			next();
		});

		it('has numeric "999"', (next) => {
			expect(zzzz.numeric).to.equal('999');

			next();
		});

		it('implements toString', (next) => {
			expect(zzzz.toString).to.be.function();
			expect(zzzz.toString()).to.equal('Zzzz');
			expect(String(zzzz)).to.equal('Zzzz');
			expect(0 + zzzz).to.equal('0Zzzz');
			expect('code:' + zzzz).to.equal('code:Zzzz');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zzzz.toJSON).to.be.function();
			expect(zzzz.toJSON()).to.equal('Zzzz');
			expect(JSON.stringify(zzzz)).to.equal('"Zzzz"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zzzz.valueOf).to.be.function();
			expect(zzzz.valueOf()).to.equal(999);
			expect(Number(zzzz)).to.equal(999);
			expect(+zzzz).to.equal(999);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zzzz.valueOf).to.be.function();
			expect(zzzz.valueOf()).to.equal(999);
			expect(Number(zzzz)).to.equal(999);
			expect(+zzzz).to.equal(999);

			expect(0 + zzzz).to.equal('0Zzzz');
			expect(String(zzzz)).to.equal('Zzzz');

			next();
		});
	});
});
