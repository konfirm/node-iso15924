/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kali - Kayah Li', () => {
		const kali = factory('Kali');

		it('instances are singletons', (next) => {
			const singleton = factory('Kali');
			const upper = factory('KALI');
			const lower = factory('kali');
			const code = factory.code('Kali');
			const numeric = factory.numeric('357');
			const number = factory.numeric(357);
			const instance = new ISO15924('Kali', '357');

			expect(singleton).to.shallow.equal(kali);
			expect(upper).to.shallow.equal(kali);
			expect(lower).to.shallow.equal(kali);
			expect(code).to.shallow.equal(kali);
			expect(numeric).to.shallow.equal(kali);
			expect(number).to.shallow.equal(kali);
			expect(instance).not.to.shallow.equal(kali);
			expect(instance.code).to.equal(kali.code);
			expect(instance.numeric).to.equal(kali.numeric);

			next();
		});

		it('has code "Kali"', (next) => {
			expect(kali.code).to.equal('Kali');

			next();
		});

		it('has numeric "357"', (next) => {
			expect(kali.numeric).to.equal('357');

			next();
		});

		it('implements toString', (next) => {
			expect(kali.toString).to.be.function();
			expect(kali.toString()).to.equal('Kali');
			expect(String(kali)).to.equal('Kali');
			expect(0 + kali).to.equal('0Kali');
			expect('code:' + kali).to.equal('code:Kali');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kali.toJSON).to.be.function();
			expect(kali.toJSON()).to.equal('Kali');
			expect(JSON.stringify(kali)).to.equal('"Kali"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kali.valueOf).to.be.function();
			expect(kali.valueOf()).to.equal(357);
			expect(Number(kali)).to.equal(357);
			expect(+kali).to.equal(357);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kali.valueOf).to.be.function();
			expect(kali.valueOf()).to.equal(357);
			expect(Number(kali)).to.equal(357);
			expect(+kali).to.equal(357);

			expect(0 + kali).to.equal('0Kali');
			expect(String(kali)).to.equal('Kali');

			next();
		});
	});
});
