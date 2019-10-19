/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Bali - Balinese', () => {
		const bali = factory('Bali');

		it('instances are singletons', (next) => {
			const singleton = factory('Bali');
			const upper = factory('BALI');
			const lower = factory('bali');
			const code = factory.code('Bali');
			const numeric = factory.numeric('360');
			const number = factory.numeric(360);
			const instance = new ISO15924('Bali', '360');

			expect(singleton).to.shallow.equal(bali);
			expect(upper).to.shallow.equal(bali);
			expect(lower).to.shallow.equal(bali);
			expect(code).to.shallow.equal(bali);
			expect(numeric).to.shallow.equal(bali);
			expect(number).to.shallow.equal(bali);
			expect(instance).not.to.shallow.equal(bali);
			expect(instance.code).to.equal(bali.code);
			expect(instance.numeric).to.equal(bali.numeric);

			next();
		});

		it('has code "Bali"', (next) => {
			expect(bali.code).to.equal('Bali');

			next();
		});

		it('has numeric "360"', (next) => {
			expect(bali.numeric).to.equal('360');

			next();
		});

		it('implements toString', (next) => {
			expect(bali.toString).to.be.function();
			expect(bali.toString()).to.equal('Bali');
			expect(String(bali)).to.equal('Bali');
			expect(0 + bali).to.equal('0Bali');
			expect('code:' + bali).to.equal('code:Bali');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bali.toJSON).to.be.function();
			expect(bali.toJSON()).to.equal('Bali');
			expect(JSON.stringify(bali)).to.equal('"Bali"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bali.valueOf).to.be.function();
			expect(bali.valueOf()).to.equal(360);
			expect(Number(bali)).to.equal(360);
			expect(+bali).to.equal(360);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bali.valueOf).to.be.function();
			expect(bali.valueOf()).to.equal(360);
			expect(Number(bali)).to.equal(360);
			expect(+bali).to.equal(360);

			expect(0 + bali).to.equal('0Bali');
			expect(String(bali)).to.equal('Bali');

			next();
		});
	});
});
