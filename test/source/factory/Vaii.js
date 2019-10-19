/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Vaii - Vai', () => {
		const vaii = factory('Vaii');

		it('instances are singletons', (next) => {
			const singleton = factory('Vaii');
			const upper = factory('VAII');
			const lower = factory('vaii');
			const code = factory.code('Vaii');
			const numeric = factory.numeric('470');
			const number = factory.numeric(470);
			const instance = new ISO15924('Vaii', '470');

			expect(singleton).to.shallow.equal(vaii);
			expect(upper).to.shallow.equal(vaii);
			expect(lower).to.shallow.equal(vaii);
			expect(code).to.shallow.equal(vaii);
			expect(numeric).to.shallow.equal(vaii);
			expect(number).to.shallow.equal(vaii);
			expect(instance).not.to.shallow.equal(vaii);
			expect(instance.code).to.equal(vaii.code);
			expect(instance.numeric).to.equal(vaii.numeric);

			next();
		});

		it('has code "Vaii"', (next) => {
			expect(vaii.code).to.equal('Vaii');

			next();
		});

		it('has numeric "470"', (next) => {
			expect(vaii.numeric).to.equal('470');

			next();
		});

		it('implements toString', (next) => {
			expect(vaii.toString).to.be.function();
			expect(vaii.toString()).to.equal('Vaii');
			expect(String(vaii)).to.equal('Vaii');
			expect(0 + vaii).to.equal('0Vaii');
			expect('code:' + vaii).to.equal('code:Vaii');

			next();
		});

		it('implements toJSON', (next) => {
			expect(vaii.toJSON).to.be.function();
			expect(vaii.toJSON()).to.equal('Vaii');
			expect(JSON.stringify(vaii)).to.equal('"Vaii"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(vaii.valueOf).to.be.function();
			expect(vaii.valueOf()).to.equal(470);
			expect(Number(vaii)).to.equal(470);
			expect(+vaii).to.equal(470);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(vaii.valueOf).to.be.function();
			expect(vaii.valueOf()).to.equal(470);
			expect(Number(vaii)).to.equal(470);
			expect(+vaii).to.equal(470);

			expect(0 + vaii).to.equal('0Vaii');
			expect(String(vaii)).to.equal('Vaii');

			next();
		});
	});
});
