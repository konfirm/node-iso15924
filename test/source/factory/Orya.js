/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Orya - Oriya (Odia)', () => {
		const orya = factory('Orya');

		it('instances are singletons', (next) => {
			const singleton = factory('Orya');
			const upper = factory('ORYA');
			const lower = factory('orya');
			const code = factory.code('Orya');
			const numeric = factory.numeric('327');
			const number = factory.numeric(327);
			const instance = new ISO15924('Orya', '327');

			expect(singleton).to.shallow.equal(orya);
			expect(upper).to.shallow.equal(orya);
			expect(lower).to.shallow.equal(orya);
			expect(code).to.shallow.equal(orya);
			expect(numeric).to.shallow.equal(orya);
			expect(number).to.shallow.equal(orya);
			expect(instance).not.to.shallow.equal(orya);
			expect(instance.code).to.equal(orya.code);
			expect(instance.numeric).to.equal(orya.numeric);

			next();
		});

		it('has code "Orya"', (next) => {
			expect(orya.code).to.equal('Orya');

			next();
		});

		it('has numeric "327"', (next) => {
			expect(orya.numeric).to.equal('327');

			next();
		});

		it('implements toString', (next) => {
			expect(orya.toString).to.be.function();
			expect(orya.toString()).to.equal('Orya');
			expect(String(orya)).to.equal('Orya');
			expect(0 + orya).to.equal('0Orya');
			expect('code:' + orya).to.equal('code:Orya');

			next();
		});

		it('implements toJSON', (next) => {
			expect(orya.toJSON).to.be.function();
			expect(orya.toJSON()).to.equal('Orya');
			expect(JSON.stringify(orya)).to.equal('"Orya"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(orya.valueOf).to.be.function();
			expect(orya.valueOf()).to.equal(327);
			expect(Number(orya)).to.equal(327);
			expect(+orya).to.equal(327);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(orya.valueOf).to.be.function();
			expect(orya.valueOf()).to.equal(327);
			expect(Number(orya)).to.equal(327);
			expect(+orya).to.equal(327);

			expect(0 + orya).to.equal('0Orya');
			expect(String(orya)).to.equal('Orya');

			next();
		});
	});
});
