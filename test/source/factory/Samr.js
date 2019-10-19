/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Samr - Samaritan', () => {
		const samr = factory('Samr');

		it('instances are singletons', (next) => {
			const singleton = factory('Samr');
			const upper = factory('SAMR');
			const lower = factory('samr');
			const code = factory.code('Samr');
			const numeric = factory.numeric('123');
			const number = factory.numeric(123);
			const instance = new ISO15924('Samr', '123');

			expect(singleton).to.shallow.equal(samr);
			expect(upper).to.shallow.equal(samr);
			expect(lower).to.shallow.equal(samr);
			expect(code).to.shallow.equal(samr);
			expect(numeric).to.shallow.equal(samr);
			expect(number).to.shallow.equal(samr);
			expect(instance).not.to.shallow.equal(samr);
			expect(instance.code).to.equal(samr.code);
			expect(instance.numeric).to.equal(samr.numeric);

			next();
		});

		it('has code "Samr"', (next) => {
			expect(samr.code).to.equal('Samr');

			next();
		});

		it('has numeric "123"', (next) => {
			expect(samr.numeric).to.equal('123');

			next();
		});

		it('implements toString', (next) => {
			expect(samr.toString).to.be.function();
			expect(samr.toString()).to.equal('Samr');
			expect(String(samr)).to.equal('Samr');
			expect(0 + samr).to.equal('0Samr');
			expect('code:' + samr).to.equal('code:Samr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(samr.toJSON).to.be.function();
			expect(samr.toJSON()).to.equal('Samr');
			expect(JSON.stringify(samr)).to.equal('"Samr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(samr.valueOf).to.be.function();
			expect(samr.valueOf()).to.equal(123);
			expect(Number(samr)).to.equal(123);
			expect(+samr).to.equal(123);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(samr.valueOf).to.be.function();
			expect(samr.valueOf()).to.equal(123);
			expect(Number(samr)).to.equal(123);
			expect(+samr).to.equal(123);

			expect(0 + samr).to.equal('0Samr');
			expect(String(samr)).to.equal('Samr');

			next();
		});
	});
});
