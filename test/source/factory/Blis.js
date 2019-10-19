/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Blis - Blissymbols', () => {
		const blis = factory('Blis');

		it('instances are singletons', (next) => {
			const singleton = factory('Blis');
			const upper = factory('BLIS');
			const lower = factory('blis');
			const code = factory.code('Blis');
			const numeric = factory.numeric('550');
			const number = factory.numeric(550);
			const instance = new ISO15924('Blis', '550');

			expect(singleton).to.shallow.equal(blis);
			expect(upper).to.shallow.equal(blis);
			expect(lower).to.shallow.equal(blis);
			expect(code).to.shallow.equal(blis);
			expect(numeric).to.shallow.equal(blis);
			expect(number).to.shallow.equal(blis);
			expect(instance).not.to.shallow.equal(blis);
			expect(instance.code).to.equal(blis.code);
			expect(instance.numeric).to.equal(blis.numeric);

			next();
		});

		it('has code "Blis"', (next) => {
			expect(blis.code).to.equal('Blis');

			next();
		});

		it('has numeric "550"', (next) => {
			expect(blis.numeric).to.equal('550');

			next();
		});

		it('implements toString', (next) => {
			expect(blis.toString).to.be.function();
			expect(blis.toString()).to.equal('Blis');
			expect(String(blis)).to.equal('Blis');
			expect(0 + blis).to.equal('0Blis');
			expect('code:' + blis).to.equal('code:Blis');

			next();
		});

		it('implements toJSON', (next) => {
			expect(blis.toJSON).to.be.function();
			expect(blis.toJSON()).to.equal('Blis');
			expect(JSON.stringify(blis)).to.equal('"Blis"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(blis.valueOf).to.be.function();
			expect(blis.valueOf()).to.equal(550);
			expect(Number(blis)).to.equal(550);
			expect(+blis).to.equal(550);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(blis.valueOf).to.be.function();
			expect(blis.valueOf()).to.equal(550);
			expect(Number(blis)).to.equal(550);
			expect(+blis).to.equal(550);

			expect(0 + blis).to.equal('0Blis');
			expect(String(blis)).to.equal('Blis');

			next();
		});
	});
});
