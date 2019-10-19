/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Goth - Gothic', () => {
		const goth = factory('Goth');

		it('instances are singletons', (next) => {
			const singleton = factory('Goth');
			const upper = factory('GOTH');
			const lower = factory('goth');
			const code = factory.code('Goth');
			const numeric = factory.numeric('206');
			const number = factory.numeric(206);
			const instance = new ISO15924('Goth', '206');

			expect(singleton).to.shallow.equal(goth);
			expect(upper).to.shallow.equal(goth);
			expect(lower).to.shallow.equal(goth);
			expect(code).to.shallow.equal(goth);
			expect(numeric).to.shallow.equal(goth);
			expect(number).to.shallow.equal(goth);
			expect(instance).not.to.shallow.equal(goth);
			expect(instance.code).to.equal(goth.code);
			expect(instance.numeric).to.equal(goth.numeric);

			next();
		});

		it('has code "Goth"', (next) => {
			expect(goth.code).to.equal('Goth');

			next();
		});

		it('has numeric "206"', (next) => {
			expect(goth.numeric).to.equal('206');

			next();
		});

		it('implements toString', (next) => {
			expect(goth.toString).to.be.function();
			expect(goth.toString()).to.equal('Goth');
			expect(String(goth)).to.equal('Goth');
			expect(0 + goth).to.equal('0Goth');
			expect('code:' + goth).to.equal('code:Goth');

			next();
		});

		it('implements toJSON', (next) => {
			expect(goth.toJSON).to.be.function();
			expect(goth.toJSON()).to.equal('Goth');
			expect(JSON.stringify(goth)).to.equal('"Goth"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(goth.valueOf).to.be.function();
			expect(goth.valueOf()).to.equal(206);
			expect(Number(goth)).to.equal(206);
			expect(+goth).to.equal(206);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(goth.valueOf).to.be.function();
			expect(goth.valueOf()).to.equal(206);
			expect(Number(goth)).to.equal(206);
			expect(+goth).to.equal(206);

			expect(0 + goth).to.equal('0Goth');
			expect(String(goth)).to.equal('Goth');

			next();
		});
	});
});
