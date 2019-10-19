/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sinh - Sinhala', () => {
		const sinh = factory('Sinh');

		it('instances are singletons', (next) => {
			const singleton = factory('Sinh');
			const upper = factory('SINH');
			const lower = factory('sinh');
			const code = factory.code('Sinh');
			const numeric = factory.numeric('348');
			const number = factory.numeric(348);
			const instance = new ISO15924('Sinh', '348');

			expect(singleton).to.shallow.equal(sinh);
			expect(upper).to.shallow.equal(sinh);
			expect(lower).to.shallow.equal(sinh);
			expect(code).to.shallow.equal(sinh);
			expect(numeric).to.shallow.equal(sinh);
			expect(number).to.shallow.equal(sinh);
			expect(instance).not.to.shallow.equal(sinh);
			expect(instance.code).to.equal(sinh.code);
			expect(instance.numeric).to.equal(sinh.numeric);

			next();
		});

		it('has code "Sinh"', (next) => {
			expect(sinh.code).to.equal('Sinh');

			next();
		});

		it('has numeric "348"', (next) => {
			expect(sinh.numeric).to.equal('348');

			next();
		});

		it('implements toString', (next) => {
			expect(sinh.toString).to.be.function();
			expect(sinh.toString()).to.equal('Sinh');
			expect(String(sinh)).to.equal('Sinh');
			expect(0 + sinh).to.equal('0Sinh');
			expect('code:' + sinh).to.equal('code:Sinh');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sinh.toJSON).to.be.function();
			expect(sinh.toJSON()).to.equal('Sinh');
			expect(JSON.stringify(sinh)).to.equal('"Sinh"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sinh.valueOf).to.be.function();
			expect(sinh.valueOf()).to.equal(348);
			expect(Number(sinh)).to.equal(348);
			expect(+sinh).to.equal(348);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sinh.valueOf).to.be.function();
			expect(sinh.valueOf()).to.equal(348);
			expect(Number(sinh)).to.equal(348);
			expect(+sinh).to.equal(348);

			expect(0 + sinh).to.equal('0Sinh');
			expect(String(sinh)).to.equal('Sinh');

			next();
		});
	});
});
