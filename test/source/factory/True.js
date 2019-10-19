/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('True - Reserved for the boolean value true', () => {
		const bool = factory('True');

		it('instances are singletons', (next) => {
			const singleton = factory('True');
			const upper = factory('TRUE');
			const lower = factory('true');
			const code = factory.code('True');
			const instance = new ISO15924('True');

			expect(singleton).to.shallow.equal(bool);
			expect(upper).to.shallow.equal(bool);
			expect(lower).to.shallow.equal(bool);
			expect(code).to.shallow.equal(bool);
			expect(instance).not.to.shallow.equal(bool);
			expect(instance.code).to.equal(bool.code);
			expect(instance.numeric).to.equal(bool.numeric);

			next();
		});

		it('has code "True"', (next) => {
			expect(bool.code).to.equal('True');

			next();
		});

		it('does not have numeric', (next) => {
			expect(bool.numeric).to.be.undefined();

			next();
		});

		it('implements toString', (next) => {
			expect(bool.toString).to.be.function();
			expect(bool.toString()).to.equal('True');
			expect(String(bool)).to.equal('True');
			expect(0 + bool).to.equal('0True');
			expect('code:' + bool).to.equal('code:True');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bool.toJSON).to.be.function();
			expect(bool.toJSON()).to.equal('True');
			expect(JSON.stringify(bool)).to.equal('"True"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bool.valueOf).to.be.function();
			expect(bool.valueOf()).to.equal(0);
			expect(Number(bool)).to.equal(0);
			expect(+bool).to.equal(0);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bool.valueOf).to.be.function();
			expect(bool.valueOf()).to.equal(0);
			expect(Number(bool)).to.equal(0);
			expect(+bool).to.equal(0);

			expect(0 + bool).to.equal('0True');
			expect(String(bool)).to.equal('True');

			next();
		});
	});
});
