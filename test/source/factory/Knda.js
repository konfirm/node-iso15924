/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Knda - Kannada', () => {
		const knda = factory('Knda');

		it('instances are singletons', (next) => {
			const singleton = factory('Knda');
			const upper = factory('KNDA');
			const lower = factory('knda');
			const code = factory.code('Knda');
			const numeric = factory.numeric('345');
			const number = factory.numeric(345);
			const instance = new ISO15924('Knda', '345');

			expect(singleton).to.shallow.equal(knda);
			expect(upper).to.shallow.equal(knda);
			expect(lower).to.shallow.equal(knda);
			expect(code).to.shallow.equal(knda);
			expect(numeric).to.shallow.equal(knda);
			expect(number).to.shallow.equal(knda);
			expect(instance).not.to.shallow.equal(knda);
			expect(instance.code).to.equal(knda.code);
			expect(instance.numeric).to.equal(knda.numeric);

			next();
		});

		it('has code "Knda"', (next) => {
			expect(knda.code).to.equal('Knda');

			next();
		});

		it('has numeric "345"', (next) => {
			expect(knda.numeric).to.equal('345');

			next();
		});

		it('implements toString', (next) => {
			expect(knda.toString).to.be.function();
			expect(knda.toString()).to.equal('Knda');
			expect(String(knda)).to.equal('Knda');
			expect(0 + knda).to.equal('0Knda');
			expect('code:' + knda).to.equal('code:Knda');

			next();
		});

		it('implements toJSON', (next) => {
			expect(knda.toJSON).to.be.function();
			expect(knda.toJSON()).to.equal('Knda');
			expect(JSON.stringify(knda)).to.equal('"Knda"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(knda.valueOf).to.be.function();
			expect(knda.valueOf()).to.equal(345);
			expect(Number(knda)).to.equal(345);
			expect(+knda).to.equal(345);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(knda.valueOf).to.be.function();
			expect(knda.valueOf()).to.equal(345);
			expect(Number(knda)).to.equal(345);
			expect(+knda).to.equal(345);

			expect(0 + knda).to.equal('0Knda');
			expect(String(knda)).to.equal('Knda');

			next();
		});
	});
});
