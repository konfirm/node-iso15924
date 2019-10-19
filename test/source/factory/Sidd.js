/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sidd - Siddham, Siddhaṃ, Siddhamātṛkā', () => {
		const sidd = factory('Sidd');

		it('instances are singletons', (next) => {
			const singleton = factory('Sidd');
			const upper = factory('SIDD');
			const lower = factory('sidd');
			const code = factory.code('Sidd');
			const numeric = factory.numeric('302');
			const number = factory.numeric(302);
			const instance = new ISO15924('Sidd', '302');

			expect(singleton).to.shallow.equal(sidd);
			expect(upper).to.shallow.equal(sidd);
			expect(lower).to.shallow.equal(sidd);
			expect(code).to.shallow.equal(sidd);
			expect(numeric).to.shallow.equal(sidd);
			expect(number).to.shallow.equal(sidd);
			expect(instance).not.to.shallow.equal(sidd);
			expect(instance.code).to.equal(sidd.code);
			expect(instance.numeric).to.equal(sidd.numeric);

			next();
		});

		it('has code "Sidd"', (next) => {
			expect(sidd.code).to.equal('Sidd');

			next();
		});

		it('has numeric "302"', (next) => {
			expect(sidd.numeric).to.equal('302');

			next();
		});

		it('implements toString', (next) => {
			expect(sidd.toString).to.be.function();
			expect(sidd.toString()).to.equal('Sidd');
			expect(String(sidd)).to.equal('Sidd');
			expect(0 + sidd).to.equal('0Sidd');
			expect('code:' + sidd).to.equal('code:Sidd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sidd.toJSON).to.be.function();
			expect(sidd.toJSON()).to.equal('Sidd');
			expect(JSON.stringify(sidd)).to.equal('"Sidd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sidd.valueOf).to.be.function();
			expect(sidd.valueOf()).to.equal(302);
			expect(Number(sidd)).to.equal(302);
			expect(+sidd).to.equal(302);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sidd.valueOf).to.be.function();
			expect(sidd.valueOf()).to.equal(302);
			expect(Number(sidd)).to.equal(302);
			expect(+sidd).to.equal(302);

			expect(0 + sidd).to.equal('0Sidd');
			expect(String(sidd)).to.equal('Sidd');

			next();
		});
	});
});
