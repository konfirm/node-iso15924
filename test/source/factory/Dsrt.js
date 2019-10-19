/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Dsrt - Deseret (Mormon)', () => {
		const dsrt = factory('Dsrt');

		it('instances are singletons', (next) => {
			const singleton = factory('Dsrt');
			const upper = factory('DSRT');
			const lower = factory('dsrt');
			const code = factory.code('Dsrt');
			const numeric = factory.numeric('250');
			const number = factory.numeric(250);
			const instance = new ISO15924('Dsrt', '250');

			expect(singleton).to.shallow.equal(dsrt);
			expect(upper).to.shallow.equal(dsrt);
			expect(lower).to.shallow.equal(dsrt);
			expect(code).to.shallow.equal(dsrt);
			expect(numeric).to.shallow.equal(dsrt);
			expect(number).to.shallow.equal(dsrt);
			expect(instance).not.to.shallow.equal(dsrt);
			expect(instance.code).to.equal(dsrt.code);
			expect(instance.numeric).to.equal(dsrt.numeric);

			next();
		});

		it('has code "Dsrt"', (next) => {
			expect(dsrt.code).to.equal('Dsrt');

			next();
		});

		it('has numeric "250"', (next) => {
			expect(dsrt.numeric).to.equal('250');

			next();
		});

		it('implements toString', (next) => {
			expect(dsrt.toString).to.be.function();
			expect(dsrt.toString()).to.equal('Dsrt');
			expect(String(dsrt)).to.equal('Dsrt');
			expect(0 + dsrt).to.equal('0Dsrt');
			expect('code:' + dsrt).to.equal('code:Dsrt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(dsrt.toJSON).to.be.function();
			expect(dsrt.toJSON()).to.equal('Dsrt');
			expect(JSON.stringify(dsrt)).to.equal('"Dsrt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(dsrt.valueOf).to.be.function();
			expect(dsrt.valueOf()).to.equal(250);
			expect(Number(dsrt)).to.equal(250);
			expect(+dsrt).to.equal(250);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(dsrt.valueOf).to.be.function();
			expect(dsrt.valueOf()).to.equal(250);
			expect(Number(dsrt)).to.equal(250);
			expect(+dsrt).to.equal(250);

			expect(0 + dsrt).to.equal('0Dsrt');
			expect(String(dsrt)).to.equal('Dsrt');

			next();
		});
	});
});
