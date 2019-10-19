/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Thai - Thai', () => {
		const thai = factory('Thai');

		it('instances are singletons', (next) => {
			const singleton = factory('Thai');
			const upper = factory('THAI');
			const lower = factory('thai');
			const code = factory.code('Thai');
			const numeric = factory.numeric('352');
			const number = factory.numeric(352);
			const instance = new ISO15924('Thai', '352');

			expect(singleton).to.shallow.equal(thai);
			expect(upper).to.shallow.equal(thai);
			expect(lower).to.shallow.equal(thai);
			expect(code).to.shallow.equal(thai);
			expect(numeric).to.shallow.equal(thai);
			expect(number).to.shallow.equal(thai);
			expect(instance).not.to.shallow.equal(thai);
			expect(instance.code).to.equal(thai.code);
			expect(instance.numeric).to.equal(thai.numeric);

			next();
		});

		it('has code "Thai"', (next) => {
			expect(thai.code).to.equal('Thai');

			next();
		});

		it('has numeric "352"', (next) => {
			expect(thai.numeric).to.equal('352');

			next();
		});

		it('implements toString', (next) => {
			expect(thai.toString).to.be.function();
			expect(thai.toString()).to.equal('Thai');
			expect(String(thai)).to.equal('Thai');
			expect(0 + thai).to.equal('0Thai');
			expect('code:' + thai).to.equal('code:Thai');

			next();
		});

		it('implements toJSON', (next) => {
			expect(thai.toJSON).to.be.function();
			expect(thai.toJSON()).to.equal('Thai');
			expect(JSON.stringify(thai)).to.equal('"Thai"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(thai.valueOf).to.be.function();
			expect(thai.valueOf()).to.equal(352);
			expect(Number(thai)).to.equal(352);
			expect(+thai).to.equal(352);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(thai.valueOf).to.be.function();
			expect(thai.valueOf()).to.equal(352);
			expect(Number(thai)).to.equal(352);
			expect(+thai).to.equal(352);

			expect(0 + thai).to.equal('0Thai');
			expect(String(thai)).to.equal('Thai');

			next();
		});
	});
});
