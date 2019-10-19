/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kore - Korean (alias for Hangul + Han)', () => {
		const kore = factory('Kore');

		it('instances are singletons', (next) => {
			const singleton = factory('Kore');
			const upper = factory('KORE');
			const lower = factory('kore');
			const code = factory.code('Kore');
			const numeric = factory.numeric('287');
			const number = factory.numeric(287);
			const instance = new ISO15924('Kore', '287');

			expect(singleton).to.shallow.equal(kore);
			expect(upper).to.shallow.equal(kore);
			expect(lower).to.shallow.equal(kore);
			expect(code).to.shallow.equal(kore);
			expect(numeric).to.shallow.equal(kore);
			expect(number).to.shallow.equal(kore);
			expect(instance).not.to.shallow.equal(kore);
			expect(instance.code).to.equal(kore.code);
			expect(instance.numeric).to.equal(kore.numeric);

			next();
		});

		it('has code "Kore"', (next) => {
			expect(kore.code).to.equal('Kore');

			next();
		});

		it('has numeric "287"', (next) => {
			expect(kore.numeric).to.equal('287');

			next();
		});

		it('implements toString', (next) => {
			expect(kore.toString).to.be.function();
			expect(kore.toString()).to.equal('Kore');
			expect(String(kore)).to.equal('Kore');
			expect(0 + kore).to.equal('0Kore');
			expect('code:' + kore).to.equal('code:Kore');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kore.toJSON).to.be.function();
			expect(kore.toJSON()).to.equal('Kore');
			expect(JSON.stringify(kore)).to.equal('"Kore"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kore.valueOf).to.be.function();
			expect(kore.valueOf()).to.equal(287);
			expect(Number(kore)).to.equal(287);
			expect(+kore).to.equal(287);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kore.valueOf).to.be.function();
			expect(kore.valueOf()).to.equal(287);
			expect(Number(kore)).to.equal(287);
			expect(+kore).to.equal(287);

			expect(0 + kore).to.equal('0Kore');
			expect(String(kore)).to.equal('Kore');

			next();
		});
	});
});
