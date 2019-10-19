/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mult - Multani', () => {
		const mult = factory('Mult');

		it('instances are singletons', (next) => {
			const singleton = factory('Mult');
			const upper = factory('MULT');
			const lower = factory('mult');
			const code = factory.code('Mult');
			const numeric = factory.numeric('323');
			const number = factory.numeric(323);
			const instance = new ISO15924('Mult', '323');

			expect(singleton).to.shallow.equal(mult);
			expect(upper).to.shallow.equal(mult);
			expect(lower).to.shallow.equal(mult);
			expect(code).to.shallow.equal(mult);
			expect(numeric).to.shallow.equal(mult);
			expect(number).to.shallow.equal(mult);
			expect(instance).not.to.shallow.equal(mult);
			expect(instance.code).to.equal(mult.code);
			expect(instance.numeric).to.equal(mult.numeric);

			next();
		});

		it('has code "Mult"', (next) => {
			expect(mult.code).to.equal('Mult');

			next();
		});

		it('has numeric "323"', (next) => {
			expect(mult.numeric).to.equal('323');

			next();
		});

		it('implements toString', (next) => {
			expect(mult.toString).to.be.function();
			expect(mult.toString()).to.equal('Mult');
			expect(String(mult)).to.equal('Mult');
			expect(0 + mult).to.equal('0Mult');
			expect('code:' + mult).to.equal('code:Mult');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mult.toJSON).to.be.function();
			expect(mult.toJSON()).to.equal('Mult');
			expect(JSON.stringify(mult)).to.equal('"Mult"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mult.valueOf).to.be.function();
			expect(mult.valueOf()).to.equal(323);
			expect(Number(mult)).to.equal(323);
			expect(+mult).to.equal(323);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mult.valueOf).to.be.function();
			expect(mult.valueOf()).to.equal(323);
			expect(Number(mult)).to.equal(323);
			expect(+mult).to.equal(323);

			expect(0 + mult).to.equal('0Mult');
			expect(String(mult)).to.equal('Mult');

			next();
		});
	});
});
