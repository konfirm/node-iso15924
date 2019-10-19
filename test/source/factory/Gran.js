/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Gran - Grantha', () => {
		const gran = factory('Gran');

		it('instances are singletons', (next) => {
			const singleton = factory('Gran');
			const upper = factory('GRAN');
			const lower = factory('gran');
			const code = factory.code('Gran');
			const numeric = factory.numeric('343');
			const number = factory.numeric(343);
			const instance = new ISO15924('Gran', '343');

			expect(singleton).to.shallow.equal(gran);
			expect(upper).to.shallow.equal(gran);
			expect(lower).to.shallow.equal(gran);
			expect(code).to.shallow.equal(gran);
			expect(numeric).to.shallow.equal(gran);
			expect(number).to.shallow.equal(gran);
			expect(instance).not.to.shallow.equal(gran);
			expect(instance.code).to.equal(gran.code);
			expect(instance.numeric).to.equal(gran.numeric);

			next();
		});

		it('has code "Gran"', (next) => {
			expect(gran.code).to.equal('Gran');

			next();
		});

		it('has numeric "343"', (next) => {
			expect(gran.numeric).to.equal('343');

			next();
		});

		it('implements toString', (next) => {
			expect(gran.toString).to.be.function();
			expect(gran.toString()).to.equal('Gran');
			expect(String(gran)).to.equal('Gran');
			expect(0 + gran).to.equal('0Gran');
			expect('code:' + gran).to.equal('code:Gran');

			next();
		});

		it('implements toJSON', (next) => {
			expect(gran.toJSON).to.be.function();
			expect(gran.toJSON()).to.equal('Gran');
			expect(JSON.stringify(gran)).to.equal('"Gran"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(gran.valueOf).to.be.function();
			expect(gran.valueOf()).to.equal(343);
			expect(Number(gran)).to.equal(343);
			expect(+gran).to.equal(343);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(gran.valueOf).to.be.function();
			expect(gran.valueOf()).to.equal(343);
			expect(Number(gran)).to.equal(343);
			expect(+gran).to.equal(343);

			expect(0 + gran).to.equal('0Gran');
			expect(String(gran)).to.equal('Gran');

			next();
		});
	});
});
