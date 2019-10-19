/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kitl - Khitan large script', () => {
		const kitl = factory('Kitl');

		it('instances are singletons', (next) => {
			const singleton = factory('Kitl');
			const upper = factory('KITL');
			const lower = factory('kitl');
			const code = factory.code('Kitl');
			const numeric = factory.numeric('505');
			const number = factory.numeric(505);
			const instance = new ISO15924('Kitl', '505');

			expect(singleton).to.shallow.equal(kitl);
			expect(upper).to.shallow.equal(kitl);
			expect(lower).to.shallow.equal(kitl);
			expect(code).to.shallow.equal(kitl);
			expect(numeric).to.shallow.equal(kitl);
			expect(number).to.shallow.equal(kitl);
			expect(instance).not.to.shallow.equal(kitl);
			expect(instance.code).to.equal(kitl.code);
			expect(instance.numeric).to.equal(kitl.numeric);

			next();
		});

		it('has code "Kitl"', (next) => {
			expect(kitl.code).to.equal('Kitl');

			next();
		});

		it('has numeric "505"', (next) => {
			expect(kitl.numeric).to.equal('505');

			next();
		});

		it('implements toString', (next) => {
			expect(kitl.toString).to.be.function();
			expect(kitl.toString()).to.equal('Kitl');
			expect(String(kitl)).to.equal('Kitl');
			expect(0 + kitl).to.equal('0Kitl');
			expect('code:' + kitl).to.equal('code:Kitl');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kitl.toJSON).to.be.function();
			expect(kitl.toJSON()).to.equal('Kitl');
			expect(JSON.stringify(kitl)).to.equal('"Kitl"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kitl.valueOf).to.be.function();
			expect(kitl.valueOf()).to.equal(505);
			expect(Number(kitl)).to.equal(505);
			expect(+kitl).to.equal(505);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kitl.valueOf).to.be.function();
			expect(kitl.valueOf()).to.equal(505);
			expect(Number(kitl)).to.equal(505);
			expect(+kitl).to.equal(505);

			expect(0 + kitl).to.equal('0Kitl');
			expect(String(kitl)).to.equal('Kitl');

			next();
		});
	});
});
