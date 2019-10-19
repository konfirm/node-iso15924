/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zxxx - Code for unwritten documents', () => {
		const zxxx = factory('Zxxx');

		it('instances are singletons', (next) => {
			const singleton = factory('Zxxx');
			const upper = factory('ZXXX');
			const lower = factory('zxxx');
			const code = factory.code('Zxxx');
			const numeric = factory.numeric('997');
			const number = factory.numeric(997);
			const instance = new ISO15924('Zxxx', '997');

			expect(singleton).to.shallow.equal(zxxx);
			expect(upper).to.shallow.equal(zxxx);
			expect(lower).to.shallow.equal(zxxx);
			expect(code).to.shallow.equal(zxxx);
			expect(numeric).to.shallow.equal(zxxx);
			expect(number).to.shallow.equal(zxxx);
			expect(instance).not.to.shallow.equal(zxxx);
			expect(instance.code).to.equal(zxxx.code);
			expect(instance.numeric).to.equal(zxxx.numeric);

			next();
		});

		it('has code "Zxxx"', (next) => {
			expect(zxxx.code).to.equal('Zxxx');

			next();
		});

		it('has numeric "997"', (next) => {
			expect(zxxx.numeric).to.equal('997');

			next();
		});

		it('implements toString', (next) => {
			expect(zxxx.toString).to.be.function();
			expect(zxxx.toString()).to.equal('Zxxx');
			expect(String(zxxx)).to.equal('Zxxx');
			expect(0 + zxxx).to.equal('0Zxxx');
			expect('code:' + zxxx).to.equal('code:Zxxx');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zxxx.toJSON).to.be.function();
			expect(zxxx.toJSON()).to.equal('Zxxx');
			expect(JSON.stringify(zxxx)).to.equal('"Zxxx"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zxxx.valueOf).to.be.function();
			expect(zxxx.valueOf()).to.equal(997);
			expect(Number(zxxx)).to.equal(997);
			expect(+zxxx).to.equal(997);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zxxx.valueOf).to.be.function();
			expect(zxxx.valueOf()).to.equal(997);
			expect(Number(zxxx)).to.equal(997);
			expect(+zxxx).to.equal(997);

			expect(0 + zxxx).to.equal('0Zxxx');
			expect(String(zxxx)).to.equal('Zxxx');

			next();
		});
	});
});
