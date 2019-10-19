/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zyyy - Code for undetermined script', () => {
		const zyyy = factory('Zyyy');

		it('instances are singletons', (next) => {
			const singleton = factory('Zyyy');
			const upper = factory('ZYYY');
			const lower = factory('zyyy');
			const code = factory.code('Zyyy');
			const numeric = factory.numeric('998');
			const number = factory.numeric(998);
			const instance = new ISO15924('Zyyy', '998');

			expect(singleton).to.shallow.equal(zyyy);
			expect(upper).to.shallow.equal(zyyy);
			expect(lower).to.shallow.equal(zyyy);
			expect(code).to.shallow.equal(zyyy);
			expect(numeric).to.shallow.equal(zyyy);
			expect(number).to.shallow.equal(zyyy);
			expect(instance).not.to.shallow.equal(zyyy);
			expect(instance.code).to.equal(zyyy.code);
			expect(instance.numeric).to.equal(zyyy.numeric);

			next();
		});

		it('has code "Zyyy"', (next) => {
			expect(zyyy.code).to.equal('Zyyy');

			next();
		});

		it('has numeric "998"', (next) => {
			expect(zyyy.numeric).to.equal('998');

			next();
		});

		it('implements toString', (next) => {
			expect(zyyy.toString).to.be.function();
			expect(zyyy.toString()).to.equal('Zyyy');
			expect(String(zyyy)).to.equal('Zyyy');
			expect(0 + zyyy).to.equal('0Zyyy');
			expect('code:' + zyyy).to.equal('code:Zyyy');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zyyy.toJSON).to.be.function();
			expect(zyyy.toJSON()).to.equal('Zyyy');
			expect(JSON.stringify(zyyy)).to.equal('"Zyyy"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zyyy.valueOf).to.be.function();
			expect(zyyy.valueOf()).to.equal(998);
			expect(Number(zyyy)).to.equal(998);
			expect(+zyyy).to.equal(998);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zyyy.valueOf).to.be.function();
			expect(zyyy.valueOf()).to.equal(998);
			expect(Number(zyyy)).to.equal(998);
			expect(+zyyy).to.equal(998);

			expect(0 + zyyy).to.equal('0Zyyy');
			expect(String(zyyy)).to.equal('Zyyy');

			next();
		});
	});
});
