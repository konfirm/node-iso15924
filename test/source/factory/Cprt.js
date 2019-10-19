/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cprt - Cypriot syllabary', () => {
		const cprt = factory('Cprt');

		it('instances are singletons', (next) => {
			const singleton = factory('Cprt');
			const upper = factory('CPRT');
			const lower = factory('cprt');
			const code = factory.code('Cprt');
			const numeric = factory.numeric('403');
			const number = factory.numeric(403);
			const instance = new ISO15924('Cprt', '403');

			expect(singleton).to.shallow.equal(cprt);
			expect(upper).to.shallow.equal(cprt);
			expect(lower).to.shallow.equal(cprt);
			expect(code).to.shallow.equal(cprt);
			expect(numeric).to.shallow.equal(cprt);
			expect(number).to.shallow.equal(cprt);
			expect(instance).not.to.shallow.equal(cprt);
			expect(instance.code).to.equal(cprt.code);
			expect(instance.numeric).to.equal(cprt.numeric);

			next();
		});

		it('has code "Cprt"', (next) => {
			expect(cprt.code).to.equal('Cprt');

			next();
		});

		it('has numeric "403"', (next) => {
			expect(cprt.numeric).to.equal('403');

			next();
		});

		it('implements toString', (next) => {
			expect(cprt.toString).to.be.function();
			expect(cprt.toString()).to.equal('Cprt');
			expect(String(cprt)).to.equal('Cprt');
			expect(0 + cprt).to.equal('0Cprt');
			expect('code:' + cprt).to.equal('code:Cprt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cprt.toJSON).to.be.function();
			expect(cprt.toJSON()).to.equal('Cprt');
			expect(JSON.stringify(cprt)).to.equal('"Cprt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cprt.valueOf).to.be.function();
			expect(cprt.valueOf()).to.equal(403);
			expect(Number(cprt)).to.equal(403);
			expect(+cprt).to.equal(403);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cprt.valueOf).to.be.function();
			expect(cprt.valueOf()).to.equal(403);
			expect(Number(cprt)).to.equal(403);
			expect(+cprt).to.equal(403);

			expect(0 + cprt).to.equal('0Cprt');
			expect(String(cprt)).to.equal('Cprt');

			next();
		});
	});
});
