/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Khar - Kharoshthi', () => {
		const khar = factory('Khar');

		it('instances are singletons', (next) => {
			const singleton = factory('Khar');
			const upper = factory('KHAR');
			const lower = factory('khar');
			const code = factory.code('Khar');
			const numeric = factory.numeric('305');
			const number = factory.numeric(305);
			const instance = new ISO15924('Khar', '305');

			expect(singleton).to.shallow.equal(khar);
			expect(upper).to.shallow.equal(khar);
			expect(lower).to.shallow.equal(khar);
			expect(code).to.shallow.equal(khar);
			expect(numeric).to.shallow.equal(khar);
			expect(number).to.shallow.equal(khar);
			expect(instance).not.to.shallow.equal(khar);
			expect(instance.code).to.equal(khar.code);
			expect(instance.numeric).to.equal(khar.numeric);

			next();
		});

		it('has code "Khar"', (next) => {
			expect(khar.code).to.equal('Khar');

			next();
		});

		it('has numeric "305"', (next) => {
			expect(khar.numeric).to.equal('305');

			next();
		});

		it('implements toString', (next) => {
			expect(khar.toString).to.be.function();
			expect(khar.toString()).to.equal('Khar');
			expect(String(khar)).to.equal('Khar');
			expect(0 + khar).to.equal('0Khar');
			expect('code:' + khar).to.equal('code:Khar');

			next();
		});

		it('implements toJSON', (next) => {
			expect(khar.toJSON).to.be.function();
			expect(khar.toJSON()).to.equal('Khar');
			expect(JSON.stringify(khar)).to.equal('"Khar"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(khar.valueOf).to.be.function();
			expect(khar.valueOf()).to.equal(305);
			expect(Number(khar)).to.equal(305);
			expect(+khar).to.equal(305);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(khar.valueOf).to.be.function();
			expect(khar.valueOf()).to.equal(305);
			expect(Number(khar)).to.equal(305);
			expect(+khar).to.equal(305);

			expect(0 + khar).to.equal('0Khar');
			expect(String(khar)).to.equal('Khar');

			next();
		});
	});
});
