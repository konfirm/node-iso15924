/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabc - Codes reserved for private use', () => {
		const qabc = factory('Qabc');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabc');
			const upper = factory('QABC');
			const lower = factory('qabc');
			const code = factory.code('Qabc');
			const numeric = factory.numeric('928');
			const number = factory.numeric(928);
			const instance = new ISO15924('Qabc', '928');

			expect(singleton).to.shallow.equal(qabc);
			expect(upper).to.shallow.equal(qabc);
			expect(lower).to.shallow.equal(qabc);
			expect(code).to.shallow.equal(qabc);
			expect(numeric).to.shallow.equal(qabc);
			expect(number).to.shallow.equal(qabc);
			expect(instance).not.to.shallow.equal(qabc);
			expect(instance.code).to.equal(qabc.code);
			expect(instance.numeric).to.equal(qabc.numeric);

			next();
		});

		it('has code "Qabc"', (next) => {
			expect(qabc.code).to.equal('Qabc');

			next();
		});

		it('has numeric "928"', (next) => {
			expect(qabc.numeric).to.equal('928');

			next();
		});

		it('implements toString', (next) => {
			expect(qabc.toString).to.be.function();
			expect(qabc.toString()).to.equal('Qabc');
			expect(String(qabc)).to.equal('Qabc');
			expect(0 + qabc).to.equal('0Qabc');
			expect('code:' + qabc).to.equal('code:Qabc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabc.toJSON).to.be.function();
			expect(qabc.toJSON()).to.equal('Qabc');
			expect(JSON.stringify(qabc)).to.equal('"Qabc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabc.valueOf).to.be.function();
			expect(qabc.valueOf()).to.equal(928);
			expect(Number(qabc)).to.equal(928);
			expect(+qabc).to.equal(928);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabc.valueOf).to.be.function();
			expect(qabc.valueOf()).to.equal(928);
			expect(Number(qabc)).to.equal(928);
			expect(+qabc).to.equal(928);

			expect(0 + qabc).to.equal('0Qabc');
			expect(String(qabc)).to.equal('Qabc');

			next();
		});
	});
});
