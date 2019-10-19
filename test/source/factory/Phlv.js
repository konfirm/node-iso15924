/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Phlv - Book Pahlavi', () => {
		const phlv = factory('Phlv');

		it('instances are singletons', (next) => {
			const singleton = factory('Phlv');
			const upper = factory('PHLV');
			const lower = factory('phlv');
			const code = factory.code('Phlv');
			const numeric = factory.numeric('133');
			const number = factory.numeric(133);
			const instance = new ISO15924('Phlv', '133');

			expect(singleton).to.shallow.equal(phlv);
			expect(upper).to.shallow.equal(phlv);
			expect(lower).to.shallow.equal(phlv);
			expect(code).to.shallow.equal(phlv);
			expect(numeric).to.shallow.equal(phlv);
			expect(number).to.shallow.equal(phlv);
			expect(instance).not.to.shallow.equal(phlv);
			expect(instance.code).to.equal(phlv.code);
			expect(instance.numeric).to.equal(phlv.numeric);

			next();
		});

		it('has code "Phlv"', (next) => {
			expect(phlv.code).to.equal('Phlv');

			next();
		});

		it('has numeric "133"', (next) => {
			expect(phlv.numeric).to.equal('133');

			next();
		});

		it('implements toString', (next) => {
			expect(phlv.toString).to.be.function();
			expect(phlv.toString()).to.equal('Phlv');
			expect(String(phlv)).to.equal('Phlv');
			expect(0 + phlv).to.equal('0Phlv');
			expect('code:' + phlv).to.equal('code:Phlv');

			next();
		});

		it('implements toJSON', (next) => {
			expect(phlv.toJSON).to.be.function();
			expect(phlv.toJSON()).to.equal('Phlv');
			expect(JSON.stringify(phlv)).to.equal('"Phlv"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(phlv.valueOf).to.be.function();
			expect(phlv.valueOf()).to.equal(133);
			expect(Number(phlv)).to.equal(133);
			expect(+phlv).to.equal(133);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(phlv.valueOf).to.be.function();
			expect(phlv.valueOf()).to.equal(133);
			expect(Number(phlv)).to.equal(133);
			expect(+phlv).to.equal(133);

			expect(0 + phlv).to.equal('0Phlv');
			expect(String(phlv)).to.equal('Phlv');

			next();
		});
	});
});
